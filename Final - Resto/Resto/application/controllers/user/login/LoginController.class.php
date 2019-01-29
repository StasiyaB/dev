<?php

class LoginController
{
    public function httpGetMethod(Http $http, array $queryFields)
    {


    }

    public function httpPostMethod(Http $http, array $formFields)
    {
        $client = new UserModel();
        $client->connectUser($_POST);
        var_dump($client);
        var_dump($_SESSION);
    }
}
