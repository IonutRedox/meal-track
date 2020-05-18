import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Food } from '@app/core/models/food.model';
import { AppState } from '@app/app.state';
import { Store } from '@ngrx/store';
import { getFoods } from '../store/selectors/food.selectors';
import { loadFoods } from '../store/actions/food.actions';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  foods$: Observable<Food[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.getFoods();
    this.foods$ = this.store.select(getFoods);
  }

  getFoods() {
    this.store.dispatch(loadFoods());
  }
}