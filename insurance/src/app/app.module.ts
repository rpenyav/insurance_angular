import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './store/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './store/user.effects';
import { HomePageViewComponent } from './pages/home-page-view/home-page-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ users: userReducer }),
    EffectsModule.forRoot([UserEffects])

  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [HomePageViewComponent] 
})
export class AppModule { }



