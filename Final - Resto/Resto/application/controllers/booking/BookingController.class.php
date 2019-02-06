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
      if(array_key_exists('firstName', $_SESSION) == false) {

       $http->redirectTo('/user/login/');
     }
      //var_dump($_POST);
      $book = new  BookingModel();

      $book->bookPlace($_SESSION['id'], $_POST);

      var_dump($book);
      $http->redirectTo('/');
    }
}
