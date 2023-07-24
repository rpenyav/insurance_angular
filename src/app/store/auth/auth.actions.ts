import { createAction, props } from '@ngrx/store';

/**
 * Acción para iniciar sesión.
 * @param username Nombre de usuario.
 * @param password Contraseña.
 */
export const login = createAction(
  '[Auth] Login',
  props<{ username: string; password: string }>(),
);

/**
 * Acción para el inicio de sesión con éxito.
 * @param accessToken El token de acceso recibido después de un inicio de sesión con éxito.
 * @param message El mensaje success.
 */
export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ accessToken: string; message: string }>(),
);

/**
 * Acción para un inicio de sesión fallido.
 * @param error El objeto de error o mensaje recibido después de un inicio de sesión fallido (creado para las pruebas unitarias)
 */
export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: any }>(),
);

/**
 * Acción para refrescar el token.
 * @param accessToken El nuevo token de acceso.
 */
export const refreshToken = createAction(
  '[Auth] Refresh Token',
  props<{ accessToken: string }>(),
);

/**
 * Acción para el refresco de token exitoso.
 * @param accessToken El nuevo token de acceso.
 */
export const refreshTokenSuccess = createAction(
  '[Auth] Refresh Token Success',
  props<{ accessToken: string }>(),
);

/**
 * Acción para un refresco de token fallido.
 * @param error El objeto de error o mensaje recibido después de un refresco de token fallido.
 */
export const refreshTokenFailure = createAction(
  '[Auth] Refresh Token Failure',
  props<{ error: any }>(),
);

/**
 * Acción para un token válido.
 * @param error El objeto de error o mensaje recibido si el token no es válido.
 */
export const tokenStillValid = createAction(
  '[Auth] Token Still Valid',
  props<{ error: any }>(),
);

/**
 * Acción para el cierre de sesión exitoso.
 */
export const logoutSuccess = createAction('[Auth] Logout Success');
