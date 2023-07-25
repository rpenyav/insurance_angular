import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexGestionesComponent } from './index-gestiones.component';

describe('IndexGestionesComponent', () => {
  let component: IndexGestionesComponent;
  let fixture: ComponentFixture<IndexGestionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndexGestionesComponent]
    });
    fixture = TestBed.createComponent(IndexGestionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
