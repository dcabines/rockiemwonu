import { createReducer, on } from '@ngrx/store';
import { LoginState } from './state';
import actions from './actions';

const initialState: LoginState = {
  loginForm: {
    username: null,
    password: null
  }
};

export const loginReducer = createReducer(
  initialState,
  on(
    actions.loginForm.formChanged,
    (state, { changes: loginForm }): LoginState => ({
      ...state,
      loginForm: { ...state.loginForm, ...loginForm }
    })
  )
);
