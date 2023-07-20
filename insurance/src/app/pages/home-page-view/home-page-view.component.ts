import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';

import { loadUsers } from '../../store/user.actions';
import { User } from '../../models/user.model';
import { AppState } from '../../store/app.state';

@Component({
  selector: 'app-home-page-view',
  templateUrl: './home-page-view.component.html',
  styleUrls: ['./home-page-view.component.scss']
})
export class HomePageViewComponent implements OnInit {
  users$: Observable<User[]> = of([]);

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(loadUsers());
    this.users$ = this.store.select(state => state.users);
  }
}
