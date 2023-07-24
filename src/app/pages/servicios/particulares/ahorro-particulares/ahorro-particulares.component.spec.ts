import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AhorroParticularesComponent } from './ahorro-particulares.component';

describe('AhorroParticularesComponent', () => {
  let component: AhorroParticularesComponent;
  let fixture: ComponentFixture<AhorroParticularesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AhorroParticularesComponent]
    });
    fixture = TestBed.createComponent(AhorroParticularesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
