import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileComponent } from './profile.component';
import {  ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { mealReducers } from '../store';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileComponent],
      imports: [
        StoreModule.forRoot({}),
        StoreModule.forFeature('meal', mealReducers),
        ReactiveFormsModule,
        FormsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
