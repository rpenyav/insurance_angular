import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TramitesSaludComponent } from './tramites-salud.component';

describe('TramitesSaludComponent', () => {
  let component: TramitesSaludComponent;
  let fixture: ComponentFixture<TramitesSaludComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TramitesSaludComponent]
    });
    fixture = TestBed.createComponent(TramitesSaludComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
