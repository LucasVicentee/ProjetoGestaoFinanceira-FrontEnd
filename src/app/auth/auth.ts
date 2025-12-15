import { booleanAttribute, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

interface Credentials {
  email: string,
  password: string;
}

interface AuthResponse {
  token: string;
}

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private apiUrl = 'http://localhost:8080/api/auth/login'; // EndPoint para acesso de autenticação do Spring Boot

  constructor(private http: HttpClient, private router: Router) {

  }

  login(Credentials: Credentials): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(this.apiUrl, Credentials).pipe(tap(response => {
      localStorage.setItem('authToken', response.token);
    }));
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('authToken');
    this.router.navigate(['/login']);
  }

  logout(): void {
    localStorage.removeItem('authToken');
    this.router.navigate(['/login']);
  }
}