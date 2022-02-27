import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hide = true;
  public logins: any = [];
  response: string = '';

  loginUserData = {
    username: '',
    password: '',
  };

  constructor(
    private router: Router
  ) {}
  
  ngOnInit() {}

  loginUser() {
    this.logins.forEach((element: any) => {
      console.log(element);
      console.log(this.loginUserData);
      if (
        element.USERNAME == this.loginUserData.username &&
        element.PASSWORD == this.loginUserData.password
      ) {
        console.log('Signed In');
        var user = {
          USERNAME: element.username,
          PASSWORD: element.password,
        };
        sessionStorage.setItem('type', element.LOGIN_TYPE);
        
        this.router.navigate(['/organization']);

      } else {
        this.response = 'Failed to Sign in';
        console.log('Failed to Sign in');
      }
    });
  }
}