import { createSelector } from '@ngrx/store';
import {Auth} from "../types/login";



export interface AppState {
  auth: Auth;
}

export const selectState = (state: AppState) => state.auth;
export const selectFeatureCount = createSelector(
  selectState,
  (state: Auth) => state.username,
);
