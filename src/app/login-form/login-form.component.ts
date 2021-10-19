import { Component, OnInit } from '@angular/core';
import { user } from '../user';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthenticationService } from '../authentication/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  user = new user();
  public errorMsg = '';
  childMsg: boolean;
  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthenticationService
  ) {
    this.createLoginForm();
  }

  ngOnInit() {}

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: [''],
    });
  }

  onSubmit(email, password) {
    this.user.email = email;
    this.user.password = password;
    console.log('The value is', this.loginForm.value);
    if (email == 'user' && password == '123') {
      this.auth.login('user', '123');
      this.childMsg == true;
    } else if (email == 'admin' && password == '123') {
      this.auth.login('admin', '123');
    } else {
      alert('Please Enter Valid email/Password..!!');
    }
  }
}
