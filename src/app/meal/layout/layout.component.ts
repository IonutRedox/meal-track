import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { AppState } from '@app/app.state';
import { User } from '@app/core';
import { signOut } from '@app/authentication';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  selectedButton: any;
  navButtons: any[];
  currentUser: User;

  constructor(private router: Router, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.navButtons = [
      { name: 'Dashboard', url: '/dashboard' },
      { name: "Food", url: '/food' },
      { name: 'Sign out', url: '/sign-out' }
    ];
    this.selectedButton = this.navButtons.find(btn => btn.url === this.router.url);
    this.getUser();
  }

  selectPage(navButton: any) {
    this.selectedButton = navButton;
    if (this.selectedButton.name === 'Sign out') {
      this.signOut();
    }
  }

  getUser() {
    this.currentUser = JSON.parse(localStorage.getItem('user'));
  }

  signOut() {
    this.store.dispatch(signOut());
  }
}
