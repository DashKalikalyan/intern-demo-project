import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealDishComponent } from './meal-dish.component';

describe('MealDishComponent', () => {
  let component: MealDishComponent;
  let fixture: ComponentFixture<MealDishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealDishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealDishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
