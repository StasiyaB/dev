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

  public function find($menuId){

    $dataMenu = new Database ();
    $meal = $dataMenu->query ('

                      SELECT *
                      FROM Meal
                      WHERE Id = ?',
                      [ $menuId ]
                  );

      return $meal;
  }
}
