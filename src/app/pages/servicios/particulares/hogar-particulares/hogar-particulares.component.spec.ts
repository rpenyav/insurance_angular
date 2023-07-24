import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HogarParticularesComponent } from './hogar-particulares.component';

describe('HogarParticularesComponent', () => {
  let component: HogarParticularesComponent;
  let fixture: ComponentFixture<HogarParticularesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HogarParticularesComponent]
    });
    fixture = TestBed.createComponent(HogarParticularesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
