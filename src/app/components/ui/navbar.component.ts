import { Component, OnInit } from '@angular/core';
import { logoutSuccess } from '../../store/auth/auth.actions';
import { Store } from '@ngrx/store';
import { AuthenticationService } from '../../services/authentication.service';
import { LanguageService } from '../../services/language.service';
import { services, gestiones, aboutus } from '../../utils/menu-data';

/**
 * NavbarComponent - Componente para la barra de navegación
 * @selector app-navbar
 * @templateUrl ./navbar.component.html
 * @styleUrls ./navbar.component.scss
 */
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  /**
   * Idioma actual de la interfaz de usuario
   */
  public currentLanguage = this.languageService.getLanguage();

  /**
   * Lista de servicios para el menú
   */
  public services = services;

  /**
   * Lista de gestiones para el menú
   */
  public gestiones = gestiones;

  /**
   * Lista de elementos del menú "Acerca de"
   */
  public aboutus = aboutus;

  private _isServiciosMenuVisible = false;
  private _isGestionesMenuVisible = false;
  private _isAboutUsMenuVisible = false;

  /**
   * Crea una instancia del componente Navbar
   * @param authService Servicio de autenticación
   * @param store Store para el manejo del estado
   * @param languageService Servicio para el manejo del idioma
   */
  constructor(
    private authService: AuthenticationService,
    private store: Store,
    private languageService: LanguageService,
  ) {}

  public get isServiciosMenuVisible() {
    return this._isServiciosMenuVisible;
  }

  public set isServiciosMenuVisible(visible: boolean) {
    this._isServiciosMenuVisible = visible;
  }

  public get isGestionesMenuVisible() {
    return this._isGestionesMenuVisible;
  }

  public set isGestionesMenuVisible(visible: boolean) {
    this._isGestionesMenuVisible = visible;
  }

  public get isAboutUsMenuVisible() {
    return this._isAboutUsMenuVisible;
  }

  public set isAboutUsMenuVisible(visible: boolean) {
    this._isAboutUsMenuVisible = visible;
  }

  /**
   * Método que se ejecuta cuando se inicializa el componente
   */
  ngOnInit() {
    this.services.forEach((service) => {
      console.log(service);
    });
  }

  /**
   * Método para cerrar la sesión
   */
  logout() {
    this.authService.logout();
    this.store.dispatch(logoutSuccess());
  }

  /**
   * Método para cambiar el idioma de la interfaz de usuario
   * @param target El elemento HTML select que contiene el idioma seleccionado
   */
  switchLanguage(target: EventTarget | null) {
    if (target instanceof HTMLSelectElement) {
      this.languageService.switchLanguage(target.value);
    }
  }

  /**
   * Muestra el menú correspondiente según el parámetro recibido
   * @param menu El menú a mostrar
   */
  public showMenu(menu: string): void {
    this.hideAllMenus();
    switch (menu) {
      case 'servicios':
        this.isServiciosMenuVisible = true;
        break;
      case 'gestiones':
        this.isGestionesMenuVisible = true;
        break;
      case 'aboutus':
        this.isAboutUsMenuVisible = true;
        break;
    }
  }

  /**
   * Oculta todos los menús
   */
  public hideAllMenus(): void {
    this.isServiciosMenuVisible = false;
    this.isGestionesMenuVisible = false;
    this.isAboutUsMenuVisible = false;
  }
}
