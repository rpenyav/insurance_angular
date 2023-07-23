import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private _isAuthenticated = new BehaviorSubject<boolean>(false);

  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private router: Router, // Inyecta Router
  ) {
    // Inyecta CookieService
    const token = this.cookieService.get('accessToken'); // Lee el token de las cookies
    this._isAuthenticated.next(!!token); // Si el token existe, actualiza el BehaviorSubject a 'true'
  }

  isAuthenticated = this._isAuthenticated.asObservable();

  login(username: string, password: string): Observable<any> {
    const url = 'http://localhost:3001/auth/login';
    return this.http.post(url, { username, password }).pipe(
      map((response: any) => {
        this.cookieService.set('accessToken', response.accessToken); // Guarda el token en las cookies
        this._isAuthenticated.next(true);
        return response;
      }),
    );
  }

  // Agrega el método de logout
  logout(): void {
    this.cookieService.delete('accessToken'); // Elimina el token de las cookies
    this._isAuthenticated.next(false); // Actualiza el BehaviorSubject a 'false'
    this.router.navigate(['/login']); // Navega hacia la página de login
  }

  refreshToken(token: string): Observable<any> {
    const url = 'http://localhost:3001/auth/refresh';
    return this.http.post(url, { accessToken: token }).pipe(
      map((response: any) => {
        this.cookieService.set('accessToken', response.accessToken); // Guarda el token renovado en las cookies
        this._isAuthenticated.next(true);
        return response;
      }),
      catchError((error) => {
        if (error.status === 409) {
          // Si el código de estado del error es 409, entonces el token aún es válido
          // Lanza un error específico para este caso
          throw new Error('Token is still valid');
        } else {
          // Para otros errores, lanza un error genérico
          throw new Error('Invalid token');
        }
      }),
    );
  }
}
