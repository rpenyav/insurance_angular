import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageViewComponent } from './pages/home-page-view/home-page-view.component';
import { AuthPageViewComponent } from './pages/authentication/auth-page-view.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomePageViewComponent, canActivate: [AuthGuard] },
  { path: 'login', component: AuthPageViewComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
