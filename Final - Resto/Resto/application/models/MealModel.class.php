<?php

class MealModel {

  public function showMeal() {

    $dataMeal = new Database ();
    $meal = $dataMeal->query ('

                      SELECT *
                      FROM Meal',
                      []
                  );
    return $meal;
  }



}
