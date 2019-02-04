<?php

class PaymentController
{
    public function httpGetMethod(Http $http, array $queryFields)
    {
      if(array_key_exists('lastName', $_SESSION) == false) {
        $http->redirectTo('/user/login/');
      }
    }

    public function httpPostMethod(Http $http, array $formFields)
    {

        var_dump($_POST);
        $invoices = json_decode($_POST['order']);
        var_dump($invoices);

        $mealModel = new MealModel();

        var_dump($invoices);
        $order = new OrderModel();
        $orderId = $order->addOrder($_SESSION['id']);

        foreach ($invoices as $invoice) {

          $menu = $mealModel->find($invoice->mealId);// mealId - is smth that's identified in URL
          var_dump($menu);

          $invoice->safePrice = $menu['SalePrice'];


        }

    }
}
