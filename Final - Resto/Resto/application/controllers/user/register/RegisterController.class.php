<?php

class RegisterController
{
    public function httpGetMethod(Http $http, array $queryFields)
    {


    }

    public function httpPostMethod(Http $http, array $formFields)
    {
        //var_dump($_POST);
        $user = new UserModel();
      	$user->addUser($_POST);        
        //var_dump($user);
    }
}
