<?php

class BookingModel {

  public function bookPlace($userId, $post) {


    $reserv = new Database ();
    $place = $reserv->executeSql ('

            INSERT INTO
              Booking
                (User_Id,
                 BookingDate,
                 BookingTime,
                 NumberOfSeats,
                 CreationTimestamp)
            VALUES
                (?,?,?,?, NOW())',

            [
              $userId,
              $post ['bookingYear'].'-'.
              $post ['bookingMonth'].'-'.
              $post ['bookingDay'],
              $post ['bookingHour'].':'.
              $post ['bookingMinute'],
              $post ['numberOfSeats']
            ]);

      $http = new Http();
  }
}
