import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthResponse } from '../models/auth-response.model';
import { Credentials } from '../models/credentials.model';
import { environment } from 'src/environment';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private BaseURL: string = environment.API_URL;
  private jwtToken!: string;

  constructor(private http: HttpClient) {}

  login(credentials: Credentials) {
    return this.http.post<AuthResponse>(
      this.BaseURL + '/auth/login',
      credentials
    );
  }
}
