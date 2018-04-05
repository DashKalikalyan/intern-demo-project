import { Component, OnInit, Input } from '@angular/core';
import { DishService} from '../../dish/dish.service';

@Component({
  selector: 'app-meal-dish',
  templateUrl: './meal-dish.component.html',
  styleUrls: ['./meal-dish.component.css']
})
export class MealDishComponent implements OnInit {
  @Input() dish;
  @Input() index;
  constructor(private dishService: DishService) { }

  ngOnInit() {
  }

  onRemoveDish() {
    this.dishService.removeDish(this.index);
  }

}
