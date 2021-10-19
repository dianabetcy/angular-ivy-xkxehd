import { Component } from '@angular/core';
import { AuthenticationService } from './authentication/authentication.service';
import { LoginFormComponent } from './login-form/login-form.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  role: string;
  boolValue: boolean;
  constructor(private auth: AuthenticationService) {}
  message: boolean;

  ngOnChanges() {
    this.role = localStorage.getItem('user');
    console.log('this.role ' + this.role);
    if (this.role == 'admin') {
      this.boolValue == true;
      console.log('this.boolValue ' + this.boolValue);
    } else if (this.role == 'user') {
      this.boolValue == false;
      console.log('this.boolValue ' + this.boolValue);
    } else {
      this.boolValue === false;
    }
  }
}
