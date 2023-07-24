import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageViewComponent } from './pages/home-page-view/home-page-view.component';
import { AuthPageViewComponent } from './pages/authentication/auth-page-view.component';
import { AuthGuard } from './guards/auth.guard';
import { Error400Component } from './pages/error-pages/error400.component';
import { Error404Component } from './pages/error-pages/error404.component';
import { Error500Component } from './pages/error-pages/error500.component';

const routes: Routes = [
  { path: '', component: HomePageViewComponent, canActivate: [AuthGuard] },
  { path: 'login', component: AuthPageViewComponent },

  {
    //rutas del modulo About
    path: 'about',
    loadChildren: () =>
      import('./pages/about/about.module').then((m) => m.AboutModule),
  },
  {
    //rutas del modulo Gestiones
    path: 'gestiones',
    loadChildren: () =>
      import('./pages/gestiones/gestiones.module').then(
        (m) => m.GestionesModule,
      ),
  },
  {
    //rutas del modulo Servicios
    path: 'servicios',
    loadChildren: () =>
      import('./pages/servicios/servicios.module').then(
        (m) => m.ServiciosModule,
      ),
  },
  {
    //rutas del modulo Simulador
    path: 'simulador',
    loadChildren: () =>
      import('./pages/simulador/simulador.module').then(
        (m) => m.SimuladorModule,
      ),
  },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '404', component: Error404Component },
  { path: '500', component: Error500Component },
  { path: '400', component: Error400Component },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
