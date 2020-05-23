import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Food } from '../models/food.model';

@Injectable()
export class FoodService {
  url = "https://localhost:44316/food";
  jsonHeader = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  constructor(private httpClient: HttpClient) { }

  getFoods(): Observable<Food[]> {
    return this.httpClient.get<Food[]>(this.url, this.jsonHeader);
  }
}