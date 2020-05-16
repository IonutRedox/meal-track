import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  selectedButton = null;
  navButtons: any[];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.navButtons = [
      { name: 'Dashboard', url: '/dashboard' },
      { name: "Food", url: '/food' },
      { name: 'Sign out', url: '/sign-out' }
    ];
    this.selectedButton = this.navButtons.find(btn => btn.url === this.router.url);
  }

  selectPage(navButton: any) {
    this.selectedButton = navButton;
  }
}
