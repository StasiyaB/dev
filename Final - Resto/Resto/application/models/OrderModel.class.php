<?php

class OrderModel {

private $orderId;


public function findOneOrder($orderId) {
      $dataOrder = new Database ();
      $order = $dataOrder->queryOne ('

                        SELECT *
                        FROM `Order`
                        WHERE id = ?',
                        [ $orderId ]
                    );

        return $order;
}

public function updateStatus($orderId) {
        $dataOrder = new Database();

        // Insertion de la commande dans la base de donées.
        $order = $dataOrder->queryOne
        (
            'UPDATE `Order` SET Status = "paid" WHERE Id =?',
            [ $orderId ]
        );

}


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
public function addOrderLine($orderId, $invoice) {

      $dataOrder = new Database ();

      $this->orderId = $dataOrder->executeSql ('
      INSERT INTO
        `OrderLine`
        (QuantityOrdered,
         Meal_Id,
         PriceEach,
         Order_Id
        )
      VALUES
         (?, ?, ?, ?)',

        [
          $invoice->quantity, $invoice->mealId, $invoice->safePrice, $orderId
       ]);
}
public function addTotalAmount($orderId, $totalAmount) {

      $taxAmount = $totalAmount*0.2;

      $dataOrder  = new Database ();
      $this->$totalAmount = $dataOrder->executeSql('
      UPDATE
        `Order`
      SET
        TotalAmount = ?,
         TaxRate = "20",
         TaxAmount = ?
       WHERE ID = ?',

      [
        $totalAmount, $taxAmount,$orderId
      ]);
 }
}
