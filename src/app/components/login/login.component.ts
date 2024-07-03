import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { LetDirective } from '@ngrx/component';
import helm from '@helm';
import { selectors, actions, LoginForm } from '@store/login';
import { SignupComponent } from '@app/components/signup/signup.component';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule, LetDirective, ...helm, SignupComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  store = inject(Store);
  loginForm$ = this.store.select(selectors.getLoginForm);
  loginFormValid$ = this.store.select(selectors.getLoginFormValid);

  onFormChange(changes: Partial<LoginForm>) {
    this.store.dispatch(actions.loginForm.formChanged({ changes }));
  }

  onLoginClick() {
    this.store.dispatch(actions.loginForm.loginClicked());
  }

  onSignupClick() {
    this.store.dispatch(actions.loginForm.signupClicked());
  }
}
