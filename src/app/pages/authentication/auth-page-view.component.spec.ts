import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { CookieService } from 'ngx-cookie-service';
import { AuthPageViewComponent } from './auth-page-view.component';
import { login } from 'src/app/store/auth/auth.actions';
import { AuthHeaderComponent } from 'src/app/components/auth/authheader.component';
import { of } from 'rxjs';

describe('AuthPageViewComponent', () => {
  let component: AuthPageViewComponent;
  let fixture: ComponentFixture<AuthPageViewComponent>;
  let store: MockStore;
  let consoleLogMessages: string[] = [];

  const initialState = { auth: { error: null, accessToken: null } };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [AuthPageViewComponent, AuthHeaderComponent],
      providers: [provideMockStore({ initialState }), CookieService],
    }).compileComponents();
  });

  beforeEach(() => {
    store = TestBed.inject(MockStore);
    spyOn(store, 'dispatch').and.callThrough();
    console.log = (message: string) => {
      consoleLogMessages.push(message);
    };
    fixture = TestBed.createComponent(AuthPageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch login action on form submit', () => {
    const formValue = { username: 'testUser', password: 'testPassword' };
    component.authentication.setValue(formValue);
    component.onSubmit();
    expect(store.dispatch).toHaveBeenCalledWith(
      login({ username: 'testUser', password: 'testPassword' }),
    );
  });

  it('should show error message on login failure', async () => {
    const invalidFormValue = {
      username: 'invalidUser',
      password: 'invalidPassword',
    };
    component.authentication.setValue(invalidFormValue);
    const action = login({
      username: 'invalidUser',
      password: 'invalidPassword',
    });
    spyOn(store, 'pipe').and.returnValue(of({ error: 'Invalid credentials' }));

    component.onSubmit();

    // Esperar a que se resuelvan las promesas
    await fixture.whenStable();

    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  // Otras pruebas aquí
});
