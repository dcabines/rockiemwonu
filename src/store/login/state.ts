import { createFeatureSelector, createSelector } from "@ngrx/store";

export interface LoginForm {
  username: string | null;
  password: string | null;
}

export interface LoginState {
  loginForm: LoginForm;
}

export const getLoginState = createFeatureSelector<LoginState>('login');

export const getLoginForm = createSelector(
  getLoginState,
  state => state.loginForm
);

export const getLoginFormValid = createSelector(
  getLoginForm,
  loginForm => Boolean(loginForm.username) && Boolean(loginForm.password)
);