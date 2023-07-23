import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as authActions from './auth.actions';
import { AuthenticationService } from '../../services/authentication.service';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.login),
      mergeMap((action) =>
        this.authService.login(action.username, action.password).pipe(
          map((response) =>
            authActions.loginSuccess({
              accessToken: response.accessToken,
              message: response.message,
            }),
          ),
          catchError((error) => of(authActions.loginFailure({ error }))),
        ),
      ),
    ),
  );

  refreshToken$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.refreshToken),
      mergeMap((action) =>
        this.authService.refreshToken(action.accessToken).pipe(
          map((response) =>
            authActions.refreshTokenSuccess({
              accessToken: response.accessToken,
            }),
          ),
          catchError((error) => {
            if (error.status === 409) {
              // Si el código de estado del error es 409, entonces el token aún es válido
              // Puedes despachar una acción específica para este caso
              return of(authActions.tokenStillValid({ error }));
            } else {
              // Para otros errores, despacha la acción refreshTokenFailure
              return of(authActions.refreshTokenFailure({ error }));
            }
          }),
        ),
      ),
    ),
  );

  constructor(
    private actions$: Actions,
    private authService: AuthenticationService,
  ) {}
}
