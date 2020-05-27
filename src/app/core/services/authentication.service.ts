import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthenticationService {
  url = "https://localhost:44316/users";
  jsonHeader = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  constructor(private httpClient: HttpClient) { }

  getAccessToken(): string {
    let user = JSON.parse(localStorage.getItem('user'));
    return user?.token;
  }

  isAuthenticated() {
    const token = this.getAccessToken();
    return token != null;
  }


  signIn(email: string, password: string): Observable<any> {
    let signInUrl = this.url + '/sign-in';
    let user = { email: email, password: password };
    return this.httpClient.post(signInUrl, user, this.jsonHeader);
  }

  signUp(user: User) {
    let signUpUrl = this.url + '/sign-up';
    return this.httpClient.post(signUpUrl, user, this.jsonHeader);
  }

  update(userData: any) {
    const updateUrl = this.url + '/update/' + JSON.parse(localStorage.getItem('user')).id;
    return this.httpClient.post(updateUrl, userData);
  }

  signOut() {
    localStorage.removeItem('user');
  }
}