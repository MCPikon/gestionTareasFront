import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JwtDTO } from '../models/jwt-dto';
import { LoginUsuario } from '../models/login-usuario';
import { NuevoUsuario } from '../models/nuevo-usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // URL Autenticación - Backend
  authURL = environment.authURL;

  constructor(private http: HttpClient) { }

  // métodos POST
  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any> {
    return this.http.post<any>(this.authURL + 'nuevo', nuevoUsuario);
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDTO> {
    return this.http.post<JwtDTO>(this.authURL + 'login', loginUsuario);
  }

  public refresh(dto: JwtDTO): Observable<JwtDTO> {
    return this.http.post<JwtDTO>(this.authURL + 'refresh', dto);
  }
}
