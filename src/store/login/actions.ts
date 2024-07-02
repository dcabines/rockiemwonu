import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { LoginForm } from './models/login-form';

export default createActionGroup({
  source: 'Login Form',
  events: {
    LoginClicked: emptyProps(),
    ForgotPasswordClicked: emptyProps(),
    RegisterClicked: emptyProps(),
    FormChanged: props<{ changes: Partial<LoginForm> }>()
  }
});
