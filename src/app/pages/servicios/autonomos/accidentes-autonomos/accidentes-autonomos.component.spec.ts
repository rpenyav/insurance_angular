import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccidentesAutonomosComponent } from './accidentes-autonomos.component';

describe('AccidentesAutonomosComponent', () => {
  let component: AccidentesAutonomosComponent;
  let fixture: ComponentFixture<AccidentesAutonomosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccidentesAutonomosComponent]
    });
    fixture = TestBed.createComponent(AccidentesAutonomosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
