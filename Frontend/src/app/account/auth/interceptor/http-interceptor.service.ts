import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationResponse } from '../models/authentication-response';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService  implements HttpInterceptor {

  constructor() { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const registrationUrl = 'http://localhost:8081/api/auth/register';
    const authenticationUrl = 'http://localhost:8081/api/auth/authenticate';
    const verifyUrl = 'http://localhost:8081/api/auth/verify';
    const confirmEmail = 'http://localhost:8081/api/auth/verifyEmail';
    const resetPassword = 'http://localhost:8081/api/auth/password-reset-request'
    const changerPassword = 'http://localhost:8081/api/auth/reset-password?token'

  
    // Vérifier si l'URL de la requête est celle de l'inscription ou de l'authentification
    if (req.url === registrationUrl || req.url === authenticationUrl || req.url === verifyUrl || req.url===confirmEmail ||req.url=== resetPassword || req.url===changerPassword )  {
      // Si c'est le cas, ne pas intercepter la requête
      return next.handle(req);
    }
  
    // Sinon, ajouter le jeton d'authentification à l'en-tête de la requête
    const token = localStorage.getItem('token');
  
    if (token) {
      const authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
  
      return next.handle(authReq);
    } else {
      // Gérer le cas où le token n'est pas présent dans la local storage
      // Vous pouvez rediriger l'utilisateur vers la page de connexion, par exemple
      // ou gérer la situation d'une autre manière selon vos besoins
      console.log('Token not found in local storage');
      return next.handle(req);
    }
  }

}
