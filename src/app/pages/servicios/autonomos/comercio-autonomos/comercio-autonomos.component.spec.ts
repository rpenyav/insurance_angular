import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComercioAutonomosComponent } from './comercio-autonomos.component';

describe('ComercioAutonomosComponent', () => {
  let component: ComercioAutonomosComponent;
  let fixture: ComponentFixture<ComercioAutonomosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComercioAutonomosComponent]
    });
    fixture = TestBed.createComponent(ComercioAutonomosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
