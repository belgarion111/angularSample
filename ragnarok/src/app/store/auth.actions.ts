import {createAction, props} from '@ngrx/store';
import {Auth} from "../types/login";

export const addUser = createAction(
  '[User AddUser] User',
  props<{auth : Auth}>(),
);

export const addUserSuccessfull = createAction(
  '[User AddUser Successfull] User',
  props<{auth : Auth}>(),
);

export const addUserFail = createAction(
  '[User AddUser Fail] User',
);
