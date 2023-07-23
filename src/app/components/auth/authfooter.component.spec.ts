import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthfooterComponent } from './authfooter.component';

// Importamos el servicio LanguageService que necesitamos para las pruebas
import { LanguageService } from '../../services/language.service';

// Creamos el mock del servicio LanguageService
class MockLanguageService {
  // Definimos el idioma predeterminado que queremos utilizar en las pruebas
  private defaultLanguage: string = 'es';

  // Implementamos la función getLanguage() del servicio
  getLanguage(): string {
    return this.defaultLanguage;
  }

  // Implementamos la función switchLanguage() del servicio
  switchLanguage(language: string): void {
    this.defaultLanguage = language;
  }
}

describe('AuthfooterComponent', () => {
  let component: AuthfooterComponent;
  let fixture: ComponentFixture<AuthfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthfooterComponent],
      providers: [
        // En lugar de proporcionar el servicio real, proporcionamos el servicio mock
        { provide: LanguageService, useClass: MockLanguageService },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize currentYear correctly', () => {
    const currentYear = new Date().getFullYear();
    expect(component.currentYear).toBe(currentYear);
  });

  it('should switch language correctly', () => {
    const languageService = TestBed.inject(LanguageService);
    const selectElement: HTMLSelectElement =
      fixture.nativeElement.querySelector('select');
    selectElement.value = 'en'; // Seleccionamos el idioma deseado

    selectElement.dispatchEvent(new Event('change'));

    // Verificamos que el idioma se haya cambiado correctamente
    expect(languageService.getLanguage()).toBe('en');
  });
});
