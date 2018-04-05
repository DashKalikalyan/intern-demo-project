import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../../dish.model';
import { DishService } from '../../dish.service';

@Component({
  selector: 'app-dish-item',
  templateUrl: './dish-item.component.html',
  styleUrls: ['./dish-item.component.css']
})
export class DishItemComponent implements OnInit {
  @Input() dish : Dish;
  @Input() index : number;

  constructor(private dishService : DishService) { }

  ngOnInit() {

  }

  onSelectDishItem() {
    this.dishService.dishSelected.next(this.dish);

  }

}
