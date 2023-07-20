import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { from, EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { UserService } from '../services/user.service';
import * as userActions from './user.actions';

@Injectable()
export class UserEffects {

    loadUsers$ = createEffect(() => this.actions$.pipe(
        ofType(userActions.loadUsers),
        mergeMap(() => from(this.userService.getUsers()).pipe(
          map(users => userActions.loadUsersSuccess({ users })),
          catchError(() => EMPTY)
        ))
      ));

  constructor(
    private actions$: Actions,
    private userService: UserService
  ) {}
}
