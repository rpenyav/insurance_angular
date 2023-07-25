import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TramitesSaludComponent } from './tramites-salud/tramites-salud.component';
import { PresupuestosComponent } from './presupuestos/presupuestos.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { IndexGestionesComponent } from './index-gestiones.component';
import { HttpLoaderFactory, SharedModule } from 'src/app/shared.module';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      { path: '', component: IndexGestionesComponent },
      { path: 'tramites', component: TramitesSaludComponent },
      { path: 'presupuestos', component: PresupuestosComponent },
    ],
  },
];

@NgModule({
  declarations: [
    TramitesSaludComponent,
    PresupuestosComponent,
    IndexGestionesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    TranslateModule.forChild(),
  ],
  exports: [IndexGestionesComponent],
})
export class GestionesModule {}
