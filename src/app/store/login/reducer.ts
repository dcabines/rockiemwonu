import { createReducer, on } from '@ngrx/store';
import { LoginState } from './models/login-state';
import * as actions from './actions';
import { LoginForm } from './models/login-form';

const initialState: LoginState = {
  loginForm: {
    username: { invalid: false, touched: false, value: null },
    password: { invalid: false, touched: false, value: null }
  }
};

export const reducer = createReducer(
  initialState,
  on(
    actions.loginForm.formChanged,
    (state, { changes }): LoginState => {
      let k: keyof LoginForm;
      const loginForm = { ...state.loginForm };

      for (k in changes) {
        const value = changes[k];

        if (value != undefined) {
          loginForm[k] = { value, invalid: !value, touched: true };
        }
      }

      return { ...state, loginForm };
    }
  ),
  on(
    actions.loginForm.loginClicked,
    (state): LoginState => {
      let k: keyof LoginForm;
      const loginForm = { ...state.loginForm };

      for (k in state.loginForm) {
        loginForm[k] = {
          ...loginForm[k],
          touched: true,
          invalid: !loginForm[k].value
        };
      }

      return { ...state, loginForm };
    }
  )
);
