import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageViewComponent } from './pages/home-page-view/home-page-view.component';
import { AuthPageViewComponent } from './pages/authentication/auth-page-view.component';
import { AuthGuard } from './guards/auth.guard';
import { Error400Component } from './pages/error-pages/error400.component';
import { Error404Component } from './pages/error-pages/error404.component';
import { Error500Component } from './pages/error-pages/error500.component';
import { AboutUsComponent } from './pages/about/about-us/about-us.component';
import { DisclaimersComponent } from './pages/disclaimers.component';
import { SiteMapComponent } from './pages/site-map.component';
import { SearchComponent } from './pages/search/search.component';

/**
 * Define las rutas de la aplicación.
 * @type {Routes}
 */
const routes: Routes = [
  /** Ruta a la página principal, protegida por el guardia de autenticación. */
  { path: '', component: HomePageViewComponent, canActivate: [AuthGuard] },
  { path: 'sitemap', component: SiteMapComponent, canActivate: [AuthGuard] },
  {
    path: 'disclaimers',
    component: DisclaimersComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'about/aboutus',
    component: AboutUsComponent,
    canActivate: [AuthGuard],
  },
  { path: 'search', component: SearchComponent, canActivate: [AuthGuard] },

  /** Ruta a la página de autenticación. */
  { path: 'login', component: AuthPageViewComponent },

  /**
   * Ruta al módulo "Acerca de", cargado de manera diferida.
   * Se redirige a este módulo cuando se accede a 'about'.
   */
  {
    path: 'about',
    loadChildren: () =>
      import('./pages/about/about.module').then((m) => m.AboutModule),
  },

  /**
   * Ruta al módulo "Gestiones", cargado de manera diferida.
   * Se redirige a este módulo cuando se accede a 'gestiones'.
   */
  {
    path: 'gestiones',
    loadChildren: () =>
      import('./pages/gestiones/gestiones.module').then(
        (m) => m.GestionesModule,
      ),
  },

  /**
   * Ruta al módulo "Servicios", cargado de manera diferida.
   * Se redirige a este módulo cuando se accede a 'servicios'.
   */
  {
    path: 'servicios',
    loadChildren: () =>
      import('./pages/servicios/servicios.module').then(
        (m) => m.ServiciosModule,
      ),
  },

  /**
   * Ruta al módulo "Simulador", cargado de manera diferida.
   * Se redirige a este módulo cuando se accede a 'simulador'.
   */
  {
    path: 'simulador',
    loadChildren: () =>
      import('./pages/simulador/simulador.module').then(
        (m) => m.SimuladorModule,
      ),
  },

  /** Redirección al inicio si no se especifica una ruta. */
  { path: '', redirectTo: '/', pathMatch: 'full' },

  /** Rutas a las páginas de error específicas. */
  { path: '404', component: Error404Component },
  { path: '500', component: Error500Component },
  { path: '400', component: Error400Component },

  /** Redirección a la página de error 404 si se intenta acceder a una ruta no definida. */
  { path: '**', redirectTo: '/404' },
];

/**
 * Módulo de enrutamiento de la aplicación.
 * Importa y exporta `RouterModule` con las rutas de la aplicación definidas.
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
