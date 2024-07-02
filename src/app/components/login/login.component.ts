import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { LetDirective } from '@ngrx/component';
import helm from '@helm';
import { selectors, actions, LoginForm } from '@store/login';
import { SignupComponent } from '../signup/signup.component';

@Component({
  standalone: true,
  imports: [LetDirective, ...helm, SignupComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  store = inject(Store);
  loginForm$ = this.store.select(selectors.getLoginForm);
  loginFormValid$ = this.store.select(selectors.getLoginFormValid);
  loginButtonDisabled$ = this.loginFormValid$.pipe(map(loginFormValid => !loginFormValid));

  onFormChange(changes: Partial<LoginForm>) {
    this.store.dispatch(actions.formChanged({ changes }));
  }

  onLoginClick() {
    this.store.dispatch(actions.loginClicked());
  }

  onSignupClick() {
    this.store.dispatch(actions.signupClicked());
  }
}
