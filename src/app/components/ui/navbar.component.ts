import { Component, OnInit } from '@angular/core';
import { logoutSuccess } from '../../store/auth/auth.actions';
import { Store } from '@ngrx/store'; // Importar Store desde @ngrx/store
import { AuthenticationService } from '../../services/authentication.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public currentLanguage = this.languageService.getLanguage();
  constructor(
    private authService: AuthenticationService,
    private store: Store,
    private languageService: LanguageService,
  ) {}

  ngOnInit() {}

  logout() {
    this.authService.logout();
    this.store.dispatch(logoutSuccess()); // Despachar la acción de logoutSuccess
  }

  switchLanguage(target: EventTarget | null) {
    if (target instanceof HTMLSelectElement) {
      this.languageService.switchLanguage(target.value);
    }
  }
}
