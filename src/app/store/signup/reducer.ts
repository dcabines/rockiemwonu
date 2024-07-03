import { createReducer, on } from '@ngrx/store';
import { SignupState } from './models/signup-state';
import { actions as loginActions } from '@store/login';
import actions from './actions';

const initialState: SignupState = {
  dialogOpen: false
};

export const reducer = createReducer(
  initialState,
  on(
    loginActions.loginForm.signupClicked,
    (state): SignupState => ({
      ...state,
      dialogOpen: true
    })
  ),
  on(
    actions.closeClicked,
    (): SignupState => ({
      ...initialState
    })
  )
);
