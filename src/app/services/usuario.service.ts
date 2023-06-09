import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  // URL Usuarios - Backend
  usuarioURL = environment.usuarioURL;

  constructor(private http: HttpClient) { }

  // métodos GET
  public getAll(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.usuarioURL + 'getAll');
  } 

  public getUsuarioByEmail(email: string): Observable<Usuario> {
    return this.http.get<Usuario>(this.usuarioURL + `getByEmail/${email}`);
  }
}
