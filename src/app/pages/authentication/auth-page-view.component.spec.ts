import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
import { of, throwError } from 'rxjs';
import { AuthPageViewComponent } from './auth-page-view.component';
import { AuthenticationService } from '../../services/authentication.service';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import * as authActions from '../../store/auth/auth.actions';
import { AuthHeaderComponent } from 'src/app/components/auth/authheader.component';
import { AuthfooterComponent } from 'src/app/components/auth/authfooter.component';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

// Mock user data
const mockUser = {
  username: 'magonz@gmail.com',
  password: '12345678',
};

const mockLoginResponse = {
  accessToken: 'testAccessToken',
  message: 'Login successful',
};

const authServiceStub = {
  login: (username: string, password: string) =>
    username === mockUser.username && password === mockUser.password
      ? of(mockLoginResponse)
      : throwError(() => Error('invalid credentials')),
  refreshToken: () => of({ accessToken: 'newToken' }),
  logout: () => {},
};

describe('AuthPageViewComponent', () => {
  let component: AuthPageViewComponent;
  let fixture: ComponentFixture<AuthPageViewComponent>;
  let authService: AuthenticationService;
  let store: MockStore;
  let httpTestingController: HttpTestingController;

  const initialState = { auth: { accessToken: 'initialToken' } };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        TranslateModule.forRoot(),
        CommonModule,
        ReactiveFormsModule,
      ],
      declarations: [
        AuthPageViewComponent,
        AuthHeaderComponent,
        AuthfooterComponent,
        TranslatePipe,
      ],
      providers: [provideMockStore({ initialState })],
    })
      .overrideProvider(AuthenticationService, { useValue: authServiceStub }) // Reemplazar el proveedor del servicio authService con la versión simulada
      .compileComponents();

    store = TestBed.inject(MockStore);
    authService = TestBed.inject(AuthenticationService);
    httpTestingController = TestBed.inject(HttpTestingController);
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(AuthPageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // ...

  it('should login successfully', () => {
    spyOn(store, 'dispatch');

    component.authentication.addControl('remember', new FormControl(false));

    component.authentication.setValue({ ...mockUser, remember: false });

    component.onSubmit();

    expect(store.dispatch).toHaveBeenCalledWith(
      authActions.login({
        username: mockUser.username,
        password: mockUser.password,
      }),
    );
  });

  it('should logout', () => {
    spyOn(authService, 'logout');
    authService.logout();
    expect(authService.logout).toHaveBeenCalled();
  });

  it('should show error messages when field is empty or wrong', async () => {
    // Act
    component.onSubmit();

    fixture.detectChanges(); // Detect changes after onSubmit

    // Use whenStable to ensure all pending promises are resolved
    fixture.whenStable().then(() => {
      const usernameErrors = fixture.debugElement.query(
        By.css('div#usernameErrors'),
      ).nativeElement;
      const passwordErrors = fixture.debugElement.query(
        By.css('div#passwordErrors'),
      ).nativeElement;

      // Assert
      expect(usernameErrors.textContent).toContain('auth_username_required');
      expect(passwordErrors.textContent).toContain('auth_password_required');

      // Simulate incorrect user input
      component.authentication.controls['username'].setValue(
        'incorrectUsername',
      );
      component.authentication.controls['password'].setValue('123');

      // Act
      component.onSubmit();

      fixture.detectChanges(); // Detect changes after onSubmit

      fixture.whenStable().then(() => {
        expect(usernameErrors.textContent).toContain('auth_username_invalid');
        expect(passwordErrors.textContent).toContain('auth_password_minlength');
      });
    });
  });
});
