import { ActionReducerMap } from "@ngrx/store";
import { LoginState, reducer as loginReducer } from "./login";

export interface AppState {
  login: LoginState;
}

export const reducers: ActionReducerMap<AppState> = {
  login: loginReducer
}
