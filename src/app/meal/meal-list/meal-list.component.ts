import { Component, OnInit, ViewChild } from '@angular/core';
import { Meal } from '@app/core';

@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.css']
})
export class MealListComponent implements OnInit {
  selectedMeal: Meal;
  meals: Meal[];
  constructor() { }

  ngOnInit(): void {
    this.meals = [
      { id: '1', title: 'mealA', calories: 300, foodPortions: [] },
      { id: '2', title: 'mealB', calories: 1083, foodPortions: [] },
      { id: '3', title: 'mealC', calories: 993, foodPortions: [] },
      { id: '4', title: 'mealD', calories: 183, foodPortions: [] },
      { id: '5', title: 'mealE', calories: 83, foodPortions: [] },
      { id: '6', title: 'mealF', calories: 444, foodPortions: [] }
    ];
  }

  created(meal: Meal) {
    this.meals.push(meal);
    this.selectedMeal = null;
  }

  edited(meal: Meal) {
    const mealToUpdate = this.meals.find(meal => meal.id === this.selectedMeal.id);
    const index = this.meals.indexOf(mealToUpdate);
    this.meals[index] = meal;
    this.selectedMeal = meal;
  }

  onDelete(meal: Meal) {
    this.meals = this.meals.filter(m => m !== meal);
  }

  onEdit(meal: Meal) {
    this.selectedMeal = meal;
  }

}
