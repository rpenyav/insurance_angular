import { createReducer, on } from '@ngrx/store';
import * as userActions from './user.actions';
import { User } from '../models/user.model';

export const initialState: User[] = [];

export const userReducer = createReducer(
  initialState,
  on(userActions.loadUsersSuccess, (state, { users }) => [...users]),
  on(userActions.loadUsersFailure, (state, { error }) => {
    // handle the error
    return [...state];
  })
);
