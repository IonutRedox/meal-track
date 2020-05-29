import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealListComponent } from './meal-list.component';
import { StoreModule } from '@ngrx/store';
import {  mealReducers } from '../store';

describe('MealListComponent', () => {
  let component: MealListComponent;
  let fixture: ComponentFixture<MealListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MealListComponent],
      imports: [
        StoreModule.forRoot({}),
        StoreModule.forFeature('meal', mealReducers)
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
