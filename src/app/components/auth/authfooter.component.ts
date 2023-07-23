import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-authfooter',
  templateUrl: './authfooter.component.html',
  styleUrls: ['./authfooter.component.scss'],
})
export class AuthfooterComponent implements OnInit {
  currentYear: number | undefined;
  public currentLanguage = this.languageService.getLanguage();

  constructor(private languageService: LanguageService) {
    this.currentYear = new Date().getFullYear();
  }

  ngOnInit() {}

  switchLanguage(target: EventTarget | null) {
    if (target instanceof HTMLSelectElement) {
      this.languageService.switchLanguage(target.value);
    }
  }
}
