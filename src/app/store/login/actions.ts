import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { LoginForm } from './models/login-form';
import { Credentials } from '@app/clients/session/models/credentials';
import { Session } from '@app/clients/session/models/session';
import { SignupRequest } from '@app/clients/session/models/signup-request';

export const loginForm = createActionGroup({
  source: 'Login Form',
  events: {
    LoginClicked: emptyProps(),
    ForgotPasswordClicked: emptyProps(),
    SignupClicked: emptyProps(),
    FormChanged: props<{ changes: Partial<LoginForm>; }>()
  }
});

export const login = createActionGroup({
  source: 'Login',
  events: {
    Started: props<{ credentials: Credentials; }>(),
    Succeeded: props<{ credentials: Credentials; session: Session; }>(),
    Failed: props<{ credentials: Credentials; error: any; }>(),
    Unauthorized: props<{ credentials: Credentials; error: any; }>(),
    Ended: props<{ credentials: Credentials; }>(),
  }
});

export const signup = createActionGroup({
  source: 'Signup',
  events: {
    Started: props<{ signupRequest: SignupRequest; }>(),
    Succeeded: props<{ signupRequest: SignupRequest; session: Session; }>(),
    Failed: props<{ signupRequest: SignupRequest; error: any; }>(),
    Ended: props<{ signupRequest: SignupRequest; }>(),
  }
});
