import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Session } from './models/session';
import { environment } from '@environment';
import { Credentials } from './models/credentials';
import { SignupRequest } from './models/signup-request';

@Injectable({ providedIn: 'root' })
export class SessionService {
  http = inject(HttpClient);
  login = (credentials: Credentials) => this.http.post<Session>(`${environment.apiUrl}/login`, credentials);
  signup = (signupRequest: SignupRequest) => this.http.post<Session>(`${environment.apiUrl}/signup`, signupRequest);
}
