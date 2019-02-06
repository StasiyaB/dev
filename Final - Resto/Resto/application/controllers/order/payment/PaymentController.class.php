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

        require_once('vendor/autoload.php');


        \Stripe\Stripe::setApiKey('sk_test_yxcRGzOvqQ6fFMuthwrRa8DG');


        $POST = filter_var_array($_POST, FILTER_SANITIZE_STRING);


        $first_name = $_POST['first_name'];
        $last_name = $_POST['last_name'];
        $email = $_POST['email'];
        $token = $_POST['stripeToken'];



        // create customer

        $customer = \Stripe\Customer::create(array(
        	"email" => $email,
        	"source" => $token
        ));

        //payment

        $charge = \Stripe\Charge::create(array(
        	"amount" => 3000,
        	"currency" => "eur",
        	"description"=>"Commande ok",
        	"customer" => $customer->id
        ));

        //header('Location: success.php?tid='.$charge->id.'&product='.$charge->decription);
        exit();


      //  $http->redirectTo('/success');

    }
}
