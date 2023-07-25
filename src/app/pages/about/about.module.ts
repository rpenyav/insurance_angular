import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactoComponent } from './contacto/contacto.component';
import { OficinasComponent } from './oficinas/oficinas.component';
import { TalleresComponent } from './talleres/talleres.component';
import { IndexAboutComponent } from './index-about.component';
import { SharedModule } from 'src/app/shared.module';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      { path: '', component: IndexAboutComponent },
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
    IndexAboutComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule], // include AppModule here
})
export class AboutModule {}
