import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Meal } from '../models/meal.model';

@Injectable()
export class MealService {
  url = "https://localhost:44316/meals";
  jsonHeader = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  constructor(private httpClient: HttpClient) { }

  getMeals(): Observable<Meal[]> {
    return this.httpClient.get<Meal[]>(this.url, this.jsonHeader);
  }

  createMeal(meal: Meal): Observable<any> {
    return this.httpClient.post(this.url, meal, this.jsonHeader);
  }

  updateMeal(meal: Meal): Observable<any> {
    return this.httpClient.put(this.url, meal, this.jsonHeader);
  }

  deleteMeal(meal: Meal): Observable<any> {
    const mealUrl = this.url + '/' + meal.id;
    return this.httpClient.delete(mealUrl);
  }

}
