import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'insurance';

  constructor(
    private translate: TranslateService,
    private cookieService: CookieService,
  ) {
    // Use cookie if exists, otherwise default language
    const savedLanguage = this.cookieService.get('language');
    const defaultLanguage = savedLanguage ? savedLanguage : 'en';

    this.translate.setDefaultLang(defaultLanguage);
    this.translate.use(defaultLanguage);
  }
}
