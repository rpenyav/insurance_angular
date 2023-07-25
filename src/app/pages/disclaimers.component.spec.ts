import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisclaimersComponent } from './disclaimers.component';

describe('DisclaimersComponent', () => {
  let component: DisclaimersComponent;
  let fixture: ComponentFixture<DisclaimersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisclaimersComponent]
    });
    fixture = TestBed.createComponent(DisclaimersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
