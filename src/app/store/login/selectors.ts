import { createFeatureSelector, createSelector } from "@ngrx/store";
import { LoginState } from "./models/login-state";

export const getLoginState = createFeatureSelector<LoginState>('login');

export const getLoginForm = createSelector(
  getLoginState,
  state => state.loginForm
);

export const getLoginFormValid = createSelector(
  getLoginForm,
  loginForm => Boolean(loginForm.username.value) && Boolean(loginForm.password.value)
);
