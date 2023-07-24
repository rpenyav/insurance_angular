import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtrosParticularesComponent } from './otros-particulares.component';

describe('OtrosParticularesComponent', () => {
  let component: OtrosParticularesComponent;
  let fixture: ComponentFixture<OtrosParticularesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtrosParticularesComponent]
    });
    fixture = TestBed.createComponent(OtrosParticularesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
