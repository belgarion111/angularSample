import {createReducer, on} from '@ngrx/store';
import {Auth} from '../types/login'
import {addUser} from "./auth.actions";
import {act} from "@ngrx/effects";

export const auth = {username: '', password: ''} as Auth;

export const authReducer = createReducer(
  auth,
  on(addUser, (state, action) => ({
      username: action.auth.username,
      password: action.auth.password
    })
  )
)
