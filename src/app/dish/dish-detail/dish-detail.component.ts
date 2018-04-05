import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../dish.model';
import { DishService } from '../dish.service';

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.css']
})
export class DishDetailComponent implements OnInit {

  @Input() dish : Dish;
  constructor(private dishService:DishService) { }

  ngOnInit() {
  }

  onAddDish() {
    this.dishService.addToMeal(this.dish);
  }

}
