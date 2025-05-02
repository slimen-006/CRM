import { UserService } from './user.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationResponse } from '../models/authentication-response';
import { AuthenticationRequest } from '../models/authentication-request';
import { RegisterRequest } from '../models/register-request';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  private baseUrl = 'http://localhost:8081/api/auth'

  constructor(private http:HttpClient ) { }


   register(registerRequest: RegisterRequest): Observable<AuthenticationResponse> {
    return this.http.post<AuthenticationResponse>
    (`${this.baseUrl}/register`, registerRequest);
  }

  login(
    authRequest: AuthenticationRequest
  ) {
    return this.http.post<AuthenticationResponse>
    (`${this.baseUrl}/authenticate`, authRequest);
  }


  getCurrentUserId(): string | null {
    const userString = localStorage.getItem('UserConnected'); // on suppose que l'objet est stocké sous la clé 'user'
    if (userString) {
      const user = JSON.parse(userString);
      return user.id || null;
    }
    return null;
  }
  

}
