/**
 * Importa las dependencias necesarias.
 */
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as authActions from './auth.actions';
import { AuthenticationService } from '../../services/authentication.service';

/**
 * Los efectos son responsables de lidiar con acciones complejas y asincrónicas
 * que probablemente incluyan interacciones con servicios externos (por ejemplo, APIs).
 * @class
 */
@Injectable()
export class AuthEffects {
  /**
   * Maneja la acción de login.
   * Si la autenticación es exitosa, despacha la acción loginSuccess.
   * Si hay un error durante la autenticación, despacha la acción loginFailure.
   */
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

  /**
   * Maneja la acción de refreshToken.
   * Si la actualización del token es exitosa, despacha la acción refreshTokenSuccess.
   * Si hay un error durante la actualización del token, despacha la acción refreshTokenFailure.
   * En caso de que el token aún sea válido (error 409), despacha la acción tokenStillValid.
   */
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

  /**
   * Constructor de la clase AuthEffects.
   * @constructor
   * @param actions$ Un observable de acciones.
   * @param authService El servicio de autenticación.
   */
  constructor(
    private actions$: Actions,
    private authService: AuthenticationService,
  ) {}
}
