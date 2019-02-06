<?php

class BookingModel {

  public function bookPlace() {

    $reserv = new Database ();
    $reserv = executeSql ('

            INSERT INTO
              Booking
                (Id,
                 User_Id,
                 BookingDate,
                 BookingTime,
                 NumberOfSeats,
                 CreationTimestamp)
            VALUES
                ()',
            );
  }
}
