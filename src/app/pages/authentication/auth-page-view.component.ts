import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { login } from 'src/app/store/auth/auth.actions';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ForgotPasswordModalComponent } from 'src/app/components/auth/forgot-password-modal.component';

@Component({
  selector: 'app-auth-page-view',
  templateUrl: './auth-page-view.component.html',
  styleUrls: ['./auth-page-view.component.scss'],
})
export class AuthPageViewComponent implements OnInit {
  authentication: FormGroup;
  errorMessage$: Observable<string | null>;
  translations: any;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<{ auth: { error: string; accessToken: string } }>,
    private router: Router,
    private cookieService: CookieService,
    private modalService: NgbModal,
  ) {
    this.authentication = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]], // Add email validator
      password: ['12345678', [Validators.required, Validators.minLength(5)]],
      remember: [false],
    });
    this.errorMessage$ = this.store.pipe(select((state) => state.auth.error));
  }

  ngOnInit() {
    this.errorMessage$.subscribe((errorMessage) => {
      if (errorMessage) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Las credenciales de acceso no son válidas',
        });
      }
    });

    this.store
      .pipe(select((state) => state.auth.accessToken))
      .subscribe((accessToken) => {
        if (accessToken) {
          if (this.authentication.get('remember')?.value) {
            // Creamos una nueva fecha para la expiración
            const expirationDate = new Date();
            expirationDate.setDate(expirationDate.getDate() + 1); // Añadimos un día

            // Almacenamos el token en las cookies
            this.cookieService.set('accessToken', accessToken, {
              expires: expirationDate,
            });
          } else {
            this.cookieService.set('accessToken', accessToken);
          }
          this.router.navigateByUrl('/'); // Redirect to home page
        }
      });
  }

  openForgotPasswordModal() {
    const modalRef = this.modalService.open(ForgotPasswordModalComponent, {
      backdrop: 'static',
      keyboard: false,
    });
    modalRef.result.then((result) => {
      if (result) {
        // Aquí puedes manejar el resultado de la ventana modal.
        console.log('Correo electrónico enviado correctamente');
      }
    });
  }

  onSubmit() {
    if (this.authentication.valid) {
      const { username, password } = this.authentication.value;
      this.store.dispatch(login({ username, password }));
    }
  }
}
