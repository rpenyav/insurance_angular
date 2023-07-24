import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VidaParticularesComponent } from './vida-particulares.component';

describe('VidaParticularesComponent', () => {
  let component: VidaParticularesComponent;
  let fixture: ComponentFixture<VidaParticularesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VidaParticularesComponent]
    });
    fixture = TestBed.createComponent(VidaParticularesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
