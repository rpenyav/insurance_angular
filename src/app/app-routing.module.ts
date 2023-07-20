
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageViewComponent } from './pages/home-page-view/home-page-view.component';

const routes: Routes = [
  { path: '', component: HomePageViewComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
