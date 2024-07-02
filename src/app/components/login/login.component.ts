import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import * as helm from '@helm';
import actions from '../../../store/login/actions';
import { LoginForm } from '../../../store/login/state';
import * as fromLoginForm from '../../../store/login';
import { map } from 'rxjs/operators';
import { LetDirective } from '@ngrx/component';

@Component({
  standalone: true,
  imports: [LetDirective, ...helm.directives],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  store = inject(Store);
  loginForm$ = this.store.select(fromLoginForm.getLoginForm);
  loginFormValid$ = this.store.select(fromLoginForm.getLoginFormValid);
  loginButtonDisabled$ = this.loginFormValid$.pipe(map(loginFormValid => !loginFormValid));

  onFormChange(changes: Partial<LoginForm>) {
    this.store.dispatch(actions.loginForm.formChanged({ changes }));
  }

  onLoginClick() {
    this.store.dispatch(actions.loginForm.loginClicked());
  }
}
