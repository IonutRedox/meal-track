import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class DashboardService {
  url = "https://localhost:44316/statistics";
  jsonHeader = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  constructor(private httpClient: HttpClient) { }

  public getStatistics(): Observable<any> {
    return this.httpClient.get(this.getUrlWithUserId(), this.jsonHeader);
  }

  private getUrlWithUserId() {
    const userId = JSON.parse(localStorage.getItem('user')).id;
    return this.url + '/' + userId;
  }
}