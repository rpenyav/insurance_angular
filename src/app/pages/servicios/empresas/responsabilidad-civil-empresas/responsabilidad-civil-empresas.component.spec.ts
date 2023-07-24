import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsabilidadCivilEmpresasComponent } from './responsabilidad-civil-empresas.component';

describe('ResponsabilidadCivilEmpresasComponent', () => {
  let component: ResponsabilidadCivilEmpresasComponent;
  let fixture: ComponentFixture<ResponsabilidadCivilEmpresasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResponsabilidadCivilEmpresasComponent]
    });
    fixture = TestBed.createComponent(ResponsabilidadCivilEmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
