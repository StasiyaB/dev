<?php

class ChargeController
{
    public function httpGetMethod(Http $http, array $queryFields)
    {

    }

    public function httpPostMethod(Http $http, array $formFields)
    {

            $orderId = $_GET['id'];
            $orderModel = new OrderModel();
            $order = $orderModel->findOneOrder($orderId);
            var_dump($order);
           $amount = $order['TotalAmount']+$order['TaxAmount'];

        //var_dump($order);

            require_once('vendor/autoload.php');


            \Stripe\Stripe::setApiKey('sk_test_yxcRGzOvqQ6fFMuthwrRa8DG');


            $POST = filter_var_array($_POST, FILTER_SANITIZE_STRING);


            /*$first_name = $_POST['firstName'];
            $last_name = $_POST['lastName'];*/
            $email = $_SESSION['email'];
            $token = $_POST['stripeToken'];



            // create customer

            $customer = \Stripe\Customer::create(array(
              "email" => $email,
              "source" => $token
            ));

            //payment

            $charge = \Stripe\Charge::create(array(
              "amount" => $amount*100,
              "currency" => "eur",
              "description"=>"Order number :".$orderId,
              "customer" => $customer->id
            ));

            $http->redirectTo('/success');


    }
}
