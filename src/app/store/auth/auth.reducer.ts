/**
 * Importa las dependencias necesarias.
 */
import { createReducer, on } from '@ngrx/store';
import {
  login,
  loginSuccess,
  loginFailure,
  logoutSuccess,
} from './auth.actions';

/**
 * Define el estado inicial de la autenticación.
 */
export const initialState = {
  accessToken: '',
  message: '',
  error: null,
};

/**
 * El `authReducer` maneja todas las acciones relacionadas con la autenticación.
 * @function
 * - Cuando se despacha la acción de `login`, el estado actual se mantiene.
 * - Cuando se despacha la acción de `loginSuccess`, el estado se actualiza con el nuevo accessToken y el mensaje,
 *   y cualquier error anterior se limpia.
 * - Cuando se despacha la acción de `loginFailure`, el estado se actualiza con el nuevo error.
 * - Cuando se despacha la acción de `logoutSuccess`, el estado se actualiza para limpiar el accessToken y cualquier error.
 */
export const authReducer = createReducer(
  initialState,
  on(login, (state) => state),
  on(loginSuccess, (state, { accessToken, message }) => ({
    ...state,
    accessToken,
    message,
    error: null, // Limpiar el estado de error al hacer login exitoso
  })),
  on(loginFailure, (state, { error }) => ({ ...state, error: error.message })),
  on(logoutSuccess, (state) => ({
    ...state,
    error: null, // Limpiar el estado de error al hacer logout
    accessToken: '', // Limpiar el accessToken al hacer logout
  })),
);
