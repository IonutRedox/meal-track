import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodItemComponent } from './food-item.component';

describe('FoodItemComponent', () => {
  let component: FoodItemComponent;
  let fixture: ComponentFixture<FoodItemComponent>;
  let food = { title: 'Test food', calories: 0, carbs: 0, fats: 0, id: '', image: undefined, protein: 0 };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FoodItemComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodItemComponent);
    component = fixture.componentInstance;
    component.food = food;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
