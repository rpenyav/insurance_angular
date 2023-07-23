import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  constructor(
    private translate: TranslateService,
    private cookieService: CookieService,
  ) {
    // Use cookie if exists, otherwise default language
    const savedLanguage = this.cookieService.get('language') || 'en';
    this.translate.setDefaultLang(savedLanguage);
    this.translate.use(savedLanguage);
  }

  switchLanguage(language: string) {
    this.translate.use(language);
    this.cookieService.set('language', language);
  }

  getLanguage(): string {
    const savedLanguage = this.cookieService.get('language');
    const defaultLanguage = savedLanguage ? savedLanguage : 'en';
    return defaultLanguage;
  }
}
