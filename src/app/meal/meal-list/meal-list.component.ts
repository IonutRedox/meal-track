import { Component, OnInit } from '@angular/core';
import {
  Meal,
  ProcessedMeal
} from '@app/core';

@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.css']
})
export class MealListComponent implements OnInit {
  processingMeal: ProcessedMeal;
  meals: Meal[] = [];

  constructor() { }

  ngOnInit(): void {

  }

  saved(meal: ProcessedMeal) {
    if (meal.id == '') {
      
    } else {
      const mealToUpdate = this.meals.find(m => m.id == meal.id);
      const index = this.meals.indexOf(mealToUpdate);
      this.meals[index] = meal;

    }
  }

  cancelled(notification: any) {
    this.setProcessingMeal(null);
  }

  onDelete(index: number) {
    const meal = this.meals[index];
    this.meals.splice(index, 1);
    
  }

  onEdit(meal: Meal) {
    this.setProcessingMeal(meal);
  }

  onCreate() {
    this.setProcessingMeal(null);
  }

  setProcessingMeal(meal: Meal) {
    if (meal == null) {
      this.processingMeal = new ProcessedMeal('', '', [], 0);
    } else {
      this.processingMeal = new ProcessedMeal(meal.id, meal.title, JSON.parse(JSON.stringify(meal.foodPortions)), meal.calories);
    }
  }
}