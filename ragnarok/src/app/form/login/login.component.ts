import {Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import {select, Store} from "@ngrx/store";
import {Auth} from "../../types/login";
import {selectFeatureCount} from "../../store/auth.selector";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent   {
  auth$: Observable<string> = this.store.pipe(select(selectFeatureCount))
  username = '';
  password = '';
  passwordType = 'password';
  passwordField = true;

  changePasswordField() {
    this.passwordField=!this.passwordField
    this.passwordType = this.passwordField ? 'password' : ''
  }


  constructor(private store: Store<{ auth: Auth }>) {
  }

  resetForm() {
    this.username = ''
    this.password = ''
  }


  submit() {
    let authForm : Auth = {username:this.username , password : this.password} as Auth
    this.store.dispatch({type: '[User AddUser] User', auth : authForm});
  }
}
