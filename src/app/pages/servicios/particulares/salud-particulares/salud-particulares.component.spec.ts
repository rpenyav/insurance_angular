import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaludParticularesComponent } from './salud-particulares.component';

describe('SaludParticularesComponent', () => {
  let component: SaludParticularesComponent;
  let fixture: ComponentFixture<SaludParticularesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaludParticularesComponent]
    });
    fixture = TestBed.createComponent(SaludParticularesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
