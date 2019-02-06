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

        //var_dump($_POST);
        $invoices = json_decode($_POST['order']);
        //var_dump($invoices);

        $mealModel = new MealModel();

        $order = new OrderModel();
        $orderId = $order->addOrder($_SESSION['id']);
        $totalAmount = 0;

        foreach ($invoices as $invoice) {

          $menu = $mealModel->find($invoice->mealId);// mealId - is smth that's identified in URL
          //var_dump($menu);

          $invoice->safePrice = $menu['SalePrice'];
          $totalAmount += floatval($invoice->safePrice)*intval($invoice->quantity);
          //var_dump($invoice);

          $order->addOrderLine($orderId, $invoice);
          //var_dump($order);


          var_dump($order);
        }
        $order->addTotalAmount($orderId, $totalAmount);

        /*paiement par carte*/



        $http->redirectTo('/success');

    }
}
