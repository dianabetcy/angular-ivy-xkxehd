import { Injectable } from '@angular/core';
import { user } from '../user';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

let users = [new user('admin', '123'), new user('user', '123')];

@Injectable()
export class AuthenticationService {
  user = new user();
  userType: BehaviorSubject<string> = new BehaviorSubject<string>(
    this.getUserType()
  );

  constructor(private _router: Router) {}

  getUserType() {
    return localStorage.getItem('user');
  }

  get isLoggedIn() {
    return true;
  }

  isSuperAdmin() {
    if (localStorage.getItem('user') === 'admin') {
      console.log('', localStorage.getItem('user'));
      return true;
    } else {
      console.log('', localStorage.getItem('user'));
      return false;
    }
  }

  login(email, password) {
    this.user.email = email;
    this.user.password = password;

    let authenticatedUser = users.find((u) => u.email === this.user.email);
    if (authenticatedUser && authenticatedUser.password == this.user.password) {
      localStorage.setItem('user', this.user.email);
      this.userType.next(this.user.email);
      this._router.navigate(['/contact-us']);
    } else {
      alert('Please Enter Valid email/Password..!!');
    }
  }
}
