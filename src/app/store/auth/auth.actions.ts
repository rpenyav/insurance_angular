import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[Auth] Login',
  props<{ username: string; password: string }>(),
);

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ accessToken: string; message: string }>(),
);

export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: any }>(),
);

export const refreshToken = createAction(
  '[Auth] Refresh Token',
  props<{ accessToken: string }>(),
);

export const refreshTokenSuccess = createAction(
  '[Auth] Refresh Token Success',
  props<{ accessToken: string }>(),
);

export const refreshTokenFailure = createAction(
  '[Auth] Refresh Token Failure',
  props<{ error: any }>(),
);

export const tokenStillValid = createAction(
  '[Auth] Token Still Valid',
  props<{ error: any }>(),
);

export const logoutSuccess = createAction('[Auth] Logout Success');
