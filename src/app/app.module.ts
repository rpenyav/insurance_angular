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
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
  exports: [TranslateModule],
})
export class AppModule {}
