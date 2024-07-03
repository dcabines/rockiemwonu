import { LoginForm } from "./login-form";

export interface InputState {
  touched: boolean;
  invalid: boolean;
  value: string | null;
}

export type LoginFormState = {
  [Property in keyof LoginForm]: InputState;
}

export interface LoginState {
  loginForm: LoginFormState;
}
