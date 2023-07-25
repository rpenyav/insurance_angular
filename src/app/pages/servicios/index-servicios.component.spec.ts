import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexServiciosComponent } from './index-servicios.component';

describe('IndexServiciosComponent', () => {
  let component: IndexServiciosComponent;
  let fixture: ComponentFixture<IndexServiciosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndexServiciosComponent]
    });
    fixture = TestBed.createComponent(IndexServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
