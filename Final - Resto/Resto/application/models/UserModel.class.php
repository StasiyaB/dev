<?php

class UserModel {

  public function addUser($post) {

    $hashPwd = $this->hashPassword($post['password']);

    $dataUser = new Database ();
    $dataUser->executeSql ('
              INSERT INTO
                Users
                (LastName,
                 FirstName,
                 BirthDate,
                 Email,
                 Password,
                 Address,
                 ZipCode,
                 Phone,
                 CreationTimestamp
                )
              VALUES
                 (?, ?, ?, ?, ?, ?, ?, ?, NOW())',

                [
                  $post['lastName'],
                  $post['firstName'],
                  $post['birthYear'].'-'.
                  $post['birthMonth'].'-'.
                  $post['birthDay'],
                  $post['email'],
                  $hashPwd,
                  $post['address'],
                  $post['zipCode'],
                  $post['phone']
               ]);

    $http = new Http();
    $http->redirectTo('/user/login/');
  }

  public function connectUser($post) {

		$dataClient = new Database();

		$client = $dataClient->queryOne ('

              SELECT *
              FROM Users
              WHERE Email =?',
              [ $post['email']]
            );

		var_dump($client);

		if( $client != false && $this->verifyPassword($post['password'], $client['Password']) == true ) {

			$_SESSION['id']        = $client['Id'];
			$_SESSION['email']     = $client['Email'];
			$_SESSION['firstName'] = $client['FirstName'];
			$_SESSION['lastName']  = $client['LastName'];

      $http = new Http();
      $http->redirectTo('/');

		}
	}

  private function hashPassword($password)
    {

        $salt = '$2y$11$'.substr(bin2hex(openssl_random_pseudo_bytes(32)), 0, 22);

        return crypt($password, $salt);
    }

  private function verifyPassword($password, $hashedPassword)
	  {
	     return crypt($password, $hashedPassword) == $hashedPassword;
	  }
}
