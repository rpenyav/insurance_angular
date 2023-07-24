import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';

import { EffectsModule } from '@ngrx/effects';

import { AuthEffects } from './store/auth/auth.effects';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { authReducer } from './store/auth/auth.reducer';
import { CookieService } from 'ngx-cookie-service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { AuthPageViewComponent } from './pages/authentication/auth-page-view.component';
import { HomePageViewComponent } from './pages/home-page-view/home-page-view.component';
import { AuthfooterComponent } from './components/auth/authfooter.component';
import { AuthHeaderComponent } from './components/auth/authheader.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ForgotPasswordModalComponent } from './components/auth/forgot-password-modal.component';
import { AboutModule } from './pages/about/about.module';
import { SimuladorModule } from './pages/simulador/simulador.module';
import { ServiciosModule } from './pages/servicios/servicios.module';
import { GestionesModule } from './pages/gestiones/gestiones.module';
import { Error404Component } from './pages/error-pages/error404.component';
import { Error400Component } from './pages/error-pages/error400.component';
import { Error500Component } from './pages/error-pages/error500.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    AuthPageViewComponent,
    LayoutComponent,
    HomePageViewComponent,
    HeaderComponent,
    FooterComponent,
    AuthfooterComponent,
    AuthHeaderComponent,
    ForgotPasswordModalComponent,
    Error404Component,
    Error400Component,
    Error500Component,
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({ auth: authReducer }),
    EffectsModule.forRoot([AuthEffects]),
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    NgbModule,
    AboutModule,
    SimuladorModule,
    ServiciosModule,
    GestionesModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
  exports: [TranslateModule],
})
export class AppModule {}
