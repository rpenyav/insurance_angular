import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { of, throwError } from 'rxjs';
import Swal from 'sweetalert2';
import { ForgotPasswordModalComponent } from './forgot-password-modal.component';

// Creamos un mock para el UserService
class MockUserService {
  getUserByEmail(email: string) {
    // Aquí podemos simular diferentes escenarios según el valor del email
    if (email === 'test@example.com') {
      return of({ name: 'John', email: 'test@example.com' }); // Usuario encontrado
    } else {
      return of(null); // Usuario no encontrado
    }
  }
}

describe('ForgotPasswordModalComponent', () => {
  let component: ForgotPasswordModalComponent;
  let fixture: ComponentFixture<ForgotPasswordModalComponent>;
  let userService: MockUserService;

  beforeEach(() => {
    // Configuramos el módulo de pruebas con el MockUserService en lugar del UserService real
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ForgotPasswordModalComponent],
      providers: [
        NgbActiveModal,
        { provide: UserService, useClass: MockUserService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ForgotPasswordModalComponent);
    component = fixture.componentInstance;

    // Obtenemos una instancia del MockUserService del inyector
    userService = TestBed.inject(UserService) as MockUserService;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show error message if user is not found', () => {
    // Establecemos un valor para el campo "username"
    component.username = 'nonexistent@example.com';

    // Espiamos la función Swal.fire para verificar si se ha llamado
    spyOn(Swal, 'fire');

    // Llamar al método onSubmit
    component.onSubmit();

    // Verificamos que se haya llamado a Swal.fire
    expect(Swal.fire).toHaveBeenCalled();
  });

  it('should log message if user is found', () => {
    // Establecemos un valor para el campo "username"
    component.username = 'test@example.com';

    // Espiamos la función console.log para verificar si se ha llamado
    spyOn(console, 'log');

    // Llamar al método onSubmit
    component.onSubmit();

    // Verificamos que se haya llamado a console.log con el mensaje correcto
    expect(console.log).toHaveBeenCalledWith('EL CORREO EXISTE');
  });

  it('should log error if UserService returns an error', () => {
    // Configuramos el MockUserService para que devuelva un error
    const error = new Error('Some error message');
    spyOn(userService, 'getUserByEmail').and.returnValue(throwError(error));

    // Establecemos un valor para el campo "username"
    component.username = 'test@example.com';

    // Espiamos la función console.log para verificar si se ha llamado
    spyOn(console, 'log');

    // Llamar al método onSubmit
    component.onSubmit();

    // Verificamos que se haya llamado a console.log con el mensaje de error correcto
    expect(console.log).toHaveBeenCalledWith(
      'Error al verificar el correo electrónico',
      error,
    );
  });
});
