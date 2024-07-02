import { ActionReducerMap } from "@ngrx/store";
import { LoginState, reducer as loginReducer } from "./login";
import { SignupState, reducer as signupReducer } from "./signup";

export interface AppState {
  login: LoginState;
  signup: SignupState
}

export const reducers: ActionReducerMap<AppState> = {
  login: loginReducer,
  signup: signupReducer
}
