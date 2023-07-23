import { createReducer, on } from '@ngrx/store';
import {
  login,
  loginSuccess,
  loginFailure,
  logoutSuccess,
} from './auth.actions';

export const initialState = {
  accessToken: '',
  message: '',
  error: null,
};

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
