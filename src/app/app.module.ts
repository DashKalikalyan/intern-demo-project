import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { DishComponent } from './dish/dish.component';
import { HeaderComponent } from './header/header.component';
import { DishListComponent } from './dish/dish-list/dish-list.component';
import { DishDetailComponent } from './dish/dish-detail/dish-detail.component';
import { DishItemComponent } from './dish/dish-list/dish-item/dish-item.component';
import { MealComponent } from './meal/meal.component';
import { DishService } from './dish/dish.service';
import {HttpClientModule} from "@angular/common/http";
import { MealDishComponent } from './meal/meal-dish/meal-dish.component';


@NgModule({
  declarations: [
    AppComponent,
    DishComponent,
    HeaderComponent,
    DishListComponent,
    DishDetailComponent,
    DishItemComponent,
    MealComponent,
    MealDishComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DishService],
  bootstrap: [AppComponent]
})
export class AppModule { }
