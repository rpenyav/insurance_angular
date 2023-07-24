import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TramitesSaludComponent } from './tramites-salud/tramites-salud.component';
import { PresupuestosComponent } from './presupuestos/presupuestos.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      { path: 'tramites-salud', component: TramitesSaludComponent },
      { path: 'presupuestos', component: PresupuestosComponent },
    ],
  },
];

@NgModule({
  declarations: [TramitesSaludComponent, PresupuestosComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class GestionesModule {}
