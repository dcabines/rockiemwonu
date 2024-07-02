import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { LoginForm } from './state';

export default {
  loginForm: createActionGroup({
    source: 'Login Form',
    events: {
      LoginClicked: emptyProps(),
      ForgotPasswordClicked: emptyProps(),
      RegisterClicked: emptyProps(),
      FormChanged: props<{ changes: Partial<LoginForm>; }>()
    }
  })
}
