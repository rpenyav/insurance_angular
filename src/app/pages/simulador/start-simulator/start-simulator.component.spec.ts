import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartSimulatorComponent } from './start-simulator.component';

describe('StartSimulatorComponent', () => {
  let component: StartSimulatorComponent;
  let fixture: ComponentFixture<StartSimulatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StartSimulatorComponent]
    });
    fixture = TestBed.createComponent(StartSimulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
