import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { HomePageViewComponent } from './home-page-view.component';
import { TranslateService, TranslatePipe } from '@ngx-translate/core';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/layout/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FooterComponent } from 'src/app/layout/footer/footer.component';
import { TranslateModule } from '@ngx-translate/core';

describe('HomePageViewComponent', () => {
  let component: HomePageViewComponent;
  let fixture: ComponentFixture<HomePageViewComponent>;
  let store: MockStore;

  const initialState = { users: [] };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomePageViewComponent,
        LayoutComponent,
        HeaderComponent,
        FooterComponent,

        TranslatePipe, // Agregar el TranslatePipe en la sección de declarations
      ],
      imports: [
        CommonModule,
        HttpClientModule,
        TranslateModule.forRoot(),
        HttpClientTestingModule,
      ],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePageViewComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);

    // Mock del servicio TranslateService
    const mockTranslateService = TestBed.inject(TranslateService);
    spyOn(mockTranslateService, 'get').and.returnValue(of('translatedText'));
    spyOn(mockTranslateService, 'setDefaultLang');
    spyOn(mockTranslateService, 'use');

    spyOn(store, 'dispatch'); // Espiamos la función dispatch
    fixture.detectChanges();
  });

  it('se ha creado', () => {
    expect(component).toBeTruthy();
  });
});
