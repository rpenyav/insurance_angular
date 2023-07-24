import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtrosEmpresasComponent } from './otros-empresas.component';

describe('OtrosEmpresasComponent', () => {
  let component: OtrosEmpresasComponent;
  let fixture: ComponentFixture<OtrosEmpresasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtrosEmpresasComponent]
    });
    fixture = TestBed.createComponent(OtrosEmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
