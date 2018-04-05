import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Dish} from './dish.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DishService {

  // Subject to let all the components know that the dish has been selected
  dishSelected = new Subject<Dish>();

  // Subject to let all the components know that the meal has been changed or new dish has been added to the meal
  mealChanged = new Subject<Dish[]>();

  // Subject to let all the components know that the list of dishes has been changed
  dishesChanged = new Subject<Dish[]>();

  meal : Dish[] = [];

  dishes : Dish[] = [];

  constructor(private http: HttpClient) { }

  //fetching query from the API provided and loading the data into the dishes array and emitting the result

  getDishes(searchItem) {
    this.http.get('http://www.recipepuppy.com/api/?q='+searchItem)
      .subscribe((response : any) => {
        this.dishes = response.results;
        this.dishesChanged.next(this.dishes.slice());
        document.getElementById("searchResults").scrollTo(0, 0);
      });
  }

  //adding the selected dish to the meal and emitting the new meal
  addToMeal(dish:Dish) {
    this.meal.push(dish);
    this.mealChanged.next(this.meal.slice());
  }

  //removing the selected dish from the meal and emitting the new meal
  removeDish(index : number) {
    this.meal.splice(index, 1);
    this.mealChanged.next(this.meal.slice());
  }

}
