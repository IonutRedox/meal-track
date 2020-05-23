import { Component, OnInit, Output, EventEmitter, Input, ViewChild, OnDestroy } from '@angular/core';
import {
  Meal,
  FoodPortion,
  Food,
  ProcessedMeal
} from '@app/core';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {
  @Input() meal: ProcessedMeal;
  @Output() saved = new EventEmitter<Meal>();
  @Output() cancelled = new EventEmitter<any>();
  @ViewChild('cancelButton') cancelButton;

  availableFoods: Food[];
  selectedFood: any;
  selectedQuantity: number;

  constructor() { }

  ngOnInit(): void {
    this.meal = new ProcessedMeal('', '', [], 0);
    this.resetNewFoodPortion();
  }

  onAddFoodPortion() {
    const foodPortion: FoodPortion = { food: this.selectedFood, quantity: this.selectedQuantity };
    this.meal.foodPortions.push(foodPortion);

    this.resetNewFoodPortion();
  }

  onDeleteFoodPortion(index: number) {
    this.meal.foodPortions.splice(index, 1);
  }

  canAddFoodPortion(): boolean {
    return this.selectedQuantity && this.selectedQuantity !== 0 && this.selectedFood !== 'Choose food...';
  }

  canSave(): boolean {
    return this.meal.foodPortions.length > 0;
  }

  onSave() {
    this.saved.emit(this.meal);
    this.resetNewFoodPortion();
    this.cancelButton.nativeElement.click();
  }

  onCancel() {
    this.cancelled.emit('Cancelled');
    this.resetNewFoodPortion();
  }

  resetNewFoodPortion() {
    this.selectedFood = 'Choose food...';
    this.selectedQuantity = 0;
  }
}