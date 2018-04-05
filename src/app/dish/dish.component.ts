import { Component, OnInit } from '@angular/core';
import { Dish } from './dish.model';
import { DishService } from './dish.service';


@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.css']
})
export class DishComponent implements OnInit {
  selectedDish : Dish;
  searchItem;
  constructor(private dishService : DishService) { }

  ngOnInit() {
    this.dishService.dishSelected
      .subscribe((dish: Dish) => {
        this.selectedDish = dish;
      });
  }

  onSearch() {
    console.log(this.searchItem);
    this.dishService.getDishes(this.searchItem);
  }

}
