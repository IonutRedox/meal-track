import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { mustMatch } from '@app/shared';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  changePassword: boolean = false;
  image: any;
  fileChooser: any;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.setupForm();
  }

  setupForm() {
    this.profileForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: mustMatch('password', 'confirmPassword')
    });

  }

  get pForm() {
    return this.profileForm.controls;
  }

  onChangePassword() {
    this.changePassword = !this.changePassword;
    if (!this.changePassword) {
      this.profileForm.controls['password'].setValue('');
      this.profileForm.controls['confirmPassword'].setValue('');
    }
  }

  onSubmit() {
    const formValid = this.profileForm.valid || (
      !this.changePassword &&
      this.profileForm.controls['fullName'].valid &&
      this.profileForm.controls['email'].valid
    );

    if (!formValid) {
      return;
    }

    const updatedUser = {
      fullName: this.profileForm.controls['fullName'].value,
      email: this.profileForm.controls['email'].value,
      password: this.profileForm.controls['password'].value,
      image: this.image,
    }

    console.log(updatedUser);
  }

  onFileChanged(image: any) {

  }
}