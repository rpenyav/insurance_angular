import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Importar HttpClientTestingModule
import { StoreModule } from '@ngrx/store'; // Importar StoreModule

// Importamos el servicio LanguageService que necesitamos para las pruebas
import { LanguageService } from '../../services/language.service';
import { NavbarComponent } from './navbar.component';

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

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      imports: [HttpClientTestingModule, StoreModule.forRoot({})], // Agregar HttpClientTestingModule al módulo de pruebas
      providers: [
        { provide: LanguageService, useClass: MockLanguageService },
        // ... Otros providers si es necesario ...
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
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
