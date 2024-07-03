import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, tap, mergeMap, catchError, filter, withLatestFrom } from 'rxjs/operators';
import * as actions from './actions';
import * as selectors from './selectors';
import { SessionService } from '@app/clients/session/session';
import { Credentials } from '@app/clients/session/models/credentials';
import { HttpErrorResponse } from '@angular/common/http';
import { toast } from 'ngx-sonner';

export class LoginEffects {
  actions$ = inject(Actions);
  store = inject(Store);
  sessionApi = inject(SessionService);

  loginClicked$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loginForm.loginClicked),
      withLatestFrom(this.store.select(selectors.getLoginFormValid), (_, valid) => valid),
      filter(valid => valid),
      withLatestFrom(
        this.store.select(selectors.getLoginForm),
        (_, loginForm): Credentials => ({
          username: loginForm.username.value!,
          password: loginForm.password.value!
        })
      ),
      tap(credentials => this.store.dispatch(actions.login.started({ credentials }))),
      mergeMap(credentials =>
        this.sessionApi.login(credentials).pipe(
          map(session => actions.login.succeeded({ credentials, session })),
          catchError(({ status, error}: HttpErrorResponse) =>
            status === 401
              ? of(actions.login.unauthorized({ credentials, error }))
              : of(actions.login.failed({ credentials, error }))
          ),
          tap(() => this.store.dispatch(actions.login.ended({ credentials })))
        )
      )
    )
  );

  loginInvalid$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loginForm.loginClicked),
      withLatestFrom(this.store.select(selectors.getLoginFormValid), (_, valid) => valid),
      filter(valid => !valid),
      tap(() =>
        toast('Login Form Invalid', {
          description: 'Fill in all required fields to log in'
        })
      )
    ),
    { dispatch: false }
  );

  loginFailed$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actions.login.failed),
        tap(() =>
          toast('Failed to Log In', {
            description: 'Network error probably'
          })
        )
      ),
    { dispatch: false }
  );

  loginUnauthorized$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actions.login.unauthorized),
        tap(() =>
          toast('Failed to Log In', {
            description: 'Your credentials are bad'
          })
        )
      ),
    { dispatch: false }
  );
}
