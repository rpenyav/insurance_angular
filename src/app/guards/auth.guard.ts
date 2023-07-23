import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthenticationService,
    private router: Router,
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.authService.isAuthenticated.pipe(
      take(1), // Esto toma el valor actual de isAuthenticated y se desuscribe automáticamente
      map((isAuthenticated) => {
        if (isAuthenticated) {
          return true;
        } else {
          // Redirige a la página de inicio de sesión si el usuario no está autenticado
          return this.router.createUrlTree(['/login']);
        }
      }),
    );
  }
}
