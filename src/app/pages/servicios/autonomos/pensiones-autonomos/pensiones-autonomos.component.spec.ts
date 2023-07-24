import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PensionesAutonomosComponent } from './pensiones-autonomos.component';

describe('PensionesAutonomosComponent', () => {
  let component: PensionesAutonomosComponent;
  let fixture: ComponentFixture<PensionesAutonomosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PensionesAutonomosComponent]
    });
    fixture = TestBed.createComponent(PensionesAutonomosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
