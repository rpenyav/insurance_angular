import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:3001/users'; // Reemplaza con la URL de la API de usuarios

  constructor(private http: HttpClient) {}

  getUserByEmail(username: string): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}?username=${username}`).pipe(
      map((users: any[]) => {
        // Buscamos el usuario con el username coincidente
        const user = users.find((u) => u.username === username);
        return user;
      }),
    );
  }
}
