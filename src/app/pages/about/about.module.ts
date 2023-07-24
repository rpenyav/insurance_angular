// about.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactoComponent } from './contacto/contacto.component';
import { OficinasComponent } from './oficinas/oficinas.component';
import { TalleresComponent } from './talleres/talleres.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      { path: 'aboutus', component: AboutUsComponent },
      { path: 'contacto', component: ContactoComponent },
      { path: 'oficinas', component: OficinasComponent },
      { path: 'talleres', component: TalleresComponent },
    ],
  },
];

@NgModule({
  declarations: [
    AboutUsComponent,
    ContactoComponent,
    OficinasComponent,
    TalleresComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AboutModule {}
