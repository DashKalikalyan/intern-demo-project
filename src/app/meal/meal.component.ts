import { Component, OnInit } from '@angular/core';
import { DishService } from '../dish/dish.service';
import { Dish} from '../dish/dish.model';
@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {
  meal = [];
  constructor(private dishService:DishService) { }

  ngOnInit() {
    this.dishService.mealChanged
      .subscribe(
        (meal: Dish[]) => {
          this.meal = meal;
          console.log('subscribed');
        }
      );
  }

}
