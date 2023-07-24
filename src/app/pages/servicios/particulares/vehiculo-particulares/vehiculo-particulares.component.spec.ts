import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculoParticularesComponent } from './vehiculo-particulares.component';

describe('VehiculoParticularesComponent', () => {
  let component: VehiculoParticularesComponent;
  let fixture: ComponentFixture<VehiculoParticularesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VehiculoParticularesComponent]
    });
    fixture = TestBed.createComponent(VehiculoParticularesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
