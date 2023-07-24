import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forgot-password-modal',
  templateUrl: './forgot-password-modal.component.html',
  styleUrls: ['./forgot-password-modal.component.scss'],
})
export class ForgotPasswordModalComponent implements OnInit {
  username!: string;

  constructor(
    public activeModal: NgbActiveModal,
    private userService: UserService,
  ) {}

  ngOnInit(): void {}
  //TODO ENVIAR EL EMAIL USANDO UN SERVIDIO O UNA API DE ENVIO DE EMAIL
  onSubmit(): void {
    // Verificar la existencia del correo electrónico en la base de datos
    this.userService.getUserByEmail(this.username).subscribe({
      next: (user) => {
        if (user) {
          // El correo electrónico existe, puedes agregar aquí la lógica para enviar el correo electrónico si decides hacerlo en el futuro
          console.log('EL CORREO EXISTE');
        } else {
          // El correo electrónico no existe, mostrar mensaje de error
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El correo electrónico no está registrado en nuestra base de datos.',
          });
        }
      },
      error: (error) => {
        // Error al verificar la existencia del correo electrónico
        console.log('Error al verificar el correo electrónico', error);
      },
    });
  }
}
