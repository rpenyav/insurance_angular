import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PensionesEmpresasComponent } from './pensiones-empresas.component';

describe('PensionesEmpresasComponent', () => {
  let component: PensionesEmpresasComponent;
  let fixture: ComponentFixture<PensionesEmpresasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PensionesEmpresasComponent]
    });
    fixture = TestBed.createComponent(PensionesEmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
