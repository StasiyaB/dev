<?php

class BookingController
{
    public function httpGetMethod(Http $http, array $queryFields)
    {
      if(array_key_exists('firstName', $_SESSION) == false) {

       $http->redirectTo('/user/login/');
     }

    }

    public function httpPostMethod(Http $http, array $formFields)
    {
      //var_dump($_POST);
      $book = new  BookingModel();
      $userId = $_SESSION['id'];
      $book->bookPlace($userId, $_POST);

      var_dump($book);
    }
}
