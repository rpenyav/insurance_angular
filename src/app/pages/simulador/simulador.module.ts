import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { CommonModule } from '@angular/common';
import { StartSimulatorComponent } from './start-simulator/start-simulator.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    children: [{ path: 'start', component: StartSimulatorComponent }],
  },
];

@NgModule({
  declarations: [StartSimulatorComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class SimuladorModule {}
