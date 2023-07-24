import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculosAutonomosComponent } from './vehiculos-autonomos.component';

describe('VehiculosAutonomosComponent', () => {
  let component: VehiculosAutonomosComponent;
  let fixture: ComponentFixture<VehiculosAutonomosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VehiculosAutonomosComponent]
    });
    fixture = TestBed.createComponent(VehiculosAutonomosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
