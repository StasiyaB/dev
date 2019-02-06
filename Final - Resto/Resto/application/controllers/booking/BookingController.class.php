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
      $book = new  BookingModel();
      $book->bookPlace($_POST);
      var_dump($book);
    }
}
