import { createReducer, on } from '@ngrx/store';
import { LoginState } from './models/login-state';
import actions from './actions';

const initialState: LoginState = {
  loginForm: {
    username: null,
    password: null
  }
};

export const reducer = createReducer(
  initialState,
  on(
    actions.loginForm.formChanged,
    (state, { changes: loginForm }): LoginState => ({
      ...state,
      loginForm: { ...state.loginForm, ...loginForm }
    })
  )
);
