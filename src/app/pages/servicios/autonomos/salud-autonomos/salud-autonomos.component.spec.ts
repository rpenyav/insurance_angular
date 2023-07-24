import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaludAutonomosComponent } from './salud-autonomos.component';

describe('SaludAutonomosComponent', () => {
  let component: SaludAutonomosComponent;
  let fixture: ComponentFixture<SaludAutonomosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaludAutonomosComponent]
    });
    fixture = TestBed.createComponent(SaludAutonomosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
