import { Component, OnInit } from '@angular/core';
import { Meal } from '@app/core';
import { NgbModal, ModalDismissReasons, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

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
    this.select(null);
  }

  saved(meal: Meal) {
    const index = this.meals.findIndex(m => m.id === meal.id);
    if (index === -1) {
      this.meals.push(meal);
    } else {
      this.meals[index] = meal;
    }
    this.select(null);
  }

  cancelled(notification: any) {
    this.select(null);
  }

  onDelete(index: number) {
    this.meals.splice(index, 1);
  }

  onEdit(meal: Meal) {
    this.select(meal);
  }

  select(meal: Meal) {
    if (meal == null) {
      this.selectedMeal = new Meal(Math.random().toString(), '', []);
    } else {
      this.selectedMeal = new Meal(meal.id, meal.title, JSON.parse(JSON.stringify(meal.foodPortions)));
    }
  }
}