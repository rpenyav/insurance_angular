import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { NavbarComponent } from './components/ui/navbar.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
  ],
  imports: [CommonModule],
  exports: [LayoutComponent, HeaderComponent, FooterComponent, NavbarComponent],
})
export class SharedModule {}
