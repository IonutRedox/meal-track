import { Component, OnInit, Output, EventEmitter, Input, ViewChild } from '@angular/core';
import { Meal } from '@app/core';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {
  @Input() meal: Meal;
  @Output() created = new EventEmitter<Meal>();
  @Output() edited = new EventEmitter<Meal>();
  @ViewChild('cancelButton') cancelButton;
  isEditMode: boolean;

  constructor() { }

  ngOnInit(): void {
    this.isEditMode = this.meal != null;
  }

  add() {

  }

  save() {
    this.isEditMode ? this.edited.emit(this.meal) : this.created.emit(this.meal);
    this.cancelButton.nativeElement.click();
  }
}