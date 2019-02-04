<?php

class OrderModel {

private $orderId;

public function addOrder($userId) {

      $dataOrder = new Database ();

      $this->orderId = $dataOrder->executeSql ('
      INSERT INTO
        `Order`
        (User_Id,
         CreationTimestamp,
         Status
        )
      VALUES
         (?, NOW(), "not paid")',

        [
          $userId
       ]);

       return $this->orderId;

  }

}
