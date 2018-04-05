import { Component, OnInit } from '@angular/core';
import { Dish } from '../dish.model';
import { DishService } from '../dish.service';

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.css']
})
export class DishListComponent implements OnInit {

  dishes : Dish[];
  constructor(private dishService : DishService) { }

  ngOnInit() {
    this.dishService.dishesChanged
      .subscribe((dishes:Dish[]) => {
        this.dishes = dishes;
      })
    this.dishService.getDishes('');
  }

}
