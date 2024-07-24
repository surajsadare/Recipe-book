import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isLoginForm: boolean = true;
  constructor() {}

  ngOnInit(): void {}
  switchForm() {
    this.isLoginForm = !this.isLoginForm;
  }
}
