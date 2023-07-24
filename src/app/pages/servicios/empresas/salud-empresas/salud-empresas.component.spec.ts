import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaludEmpresasComponent } from './salud-empresas.component';

describe('SaludEmpresasComponent', () => {
  let component: SaludEmpresasComponent;
  let fixture: ComponentFixture<SaludEmpresasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaludEmpresasComponent]
    });
    fixture = TestBed.createComponent(SaludEmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
