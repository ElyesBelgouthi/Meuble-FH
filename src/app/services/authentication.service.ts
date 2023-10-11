import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthResponse } from '../models/auth-response.model';
import { Credentials } from '../models/credentials.model';
import { environment } from 'src/environment';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private BaseURL: string = environment.API_URL;
  private jwtToken!: string;

  constructor(private http: HttpClient, private router: Router) {}

  login(credentials: Credentials) {
    return this.http.post<AuthResponse>(
      this.BaseURL + '/auth/login',
      credentials
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }
}
