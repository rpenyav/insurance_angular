import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { SaludAutonomosComponent } from './autonomos/salud-autonomos/salud-autonomos.component';
import { VehiculosAutonomosComponent } from './autonomos/vehiculos-autonomos/vehiculos-autonomos.component';
import { ComercioAutonomosComponent } from './autonomos/comercio-autonomos/comercio-autonomos.component';
import { AccidentesAutonomosComponent } from './autonomos/accidentes-autonomos/accidentes-autonomos.component';
import { PensionesAutonomosComponent } from './autonomos/pensiones-autonomos/pensiones-autonomos.component';
import { SaludEmpresasComponent } from './empresas/salud-empresas/salud-empresas.component';
import { PensionesEmpresasComponent } from './empresas/pensiones-empresas/pensiones-empresas.component';
import { ResponsabilidadCivilEmpresasComponent } from './empresas/responsabilidad-civil-empresas/responsabilidad-civil-empresas.component';
import { OtrosEmpresasComponent } from './empresas/otros-empresas/otros-empresas.component';
import { VehiculoParticularesComponent } from './particulares/vehiculo-particulares/vehiculo-particulares.component';
import { HogarParticularesComponent } from './particulares/hogar-particulares/hogar-particulares.component';
import { VidaParticularesComponent } from './particulares/vida-particulares/vida-particulares.component';
import { SaludParticularesComponent } from './particulares/salud-particulares/salud-particulares.component';
import { AhorroParticularesComponent } from './particulares/ahorro-particulares/ahorro-particulares.component';
import { OtrosParticularesComponent } from './particulares/otros-particulares/otros-particulares.component';
import { IndexServiciosComponent } from './index-servicios.component';
import { SharedModule } from 'src/app/shared.module';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      { path: '', component: IndexServiciosComponent },
      { path: 'autonomos/salud', component: SaludAutonomosComponent },
      { path: 'autonomos/vehiculos', component: VehiculosAutonomosComponent },
      { path: 'autonomos/comercio', component: ComercioAutonomosComponent },
      { path: 'autonomos/accidente', component: AccidentesAutonomosComponent },
      { path: 'autonomos/pensiones', component: PensionesAutonomosComponent },

      { path: 'empresas/salud', component: SaludEmpresasComponent },
      { path: 'empresas/vehiculos', component: VehiculosAutonomosComponent },
      { path: 'empresas/otros', component: OtrosEmpresasComponent },
      { path: 'empresas/rc', component: ResponsabilidadCivilEmpresasComponent },
      { path: 'empresas/pensiones', component: PensionesEmpresasComponent },

      {
        path: 'particulares/vehiculos',
        component: VehiculoParticularesComponent,
      },
      { path: 'particulares/hogar', component: HogarParticularesComponent },
      { path: 'particulares/vida', component: VidaParticularesComponent },
      { path: 'particulares/salud', component: SaludParticularesComponent },
      { path: 'particulares/ahorro', component: AhorroParticularesComponent },
      { path: 'particulares/otros', component: OtrosParticularesComponent },
    ],
  },
];

@NgModule({
  declarations: [
    SaludAutonomosComponent,
    VehiculosAutonomosComponent,
    ComercioAutonomosComponent,
    AccidentesAutonomosComponent,
    PensionesAutonomosComponent,
    SaludEmpresasComponent,
    PensionesEmpresasComponent,
    ResponsabilidadCivilEmpresasComponent,
    OtrosEmpresasComponent,
    VehiculoParticularesComponent,
    HogarParticularesComponent,
    VidaParticularesComponent,
    SaludParticularesComponent,
    AhorroParticularesComponent,
    OtrosParticularesComponent,
    IndexServiciosComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class ServiciosModule {}
