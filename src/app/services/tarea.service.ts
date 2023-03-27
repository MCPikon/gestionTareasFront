import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Tarea } from '../models/tarea';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  tareaURL = environment.tareaURL;

  constructor(private http: HttpClient) { }

  public getAllByUsuarioId(usuarioId: number) {
    return this.http.get<Tarea[]>(this.tareaURL + `getAllByUsuarioId/${usuarioId}`);
  }

  public addTarea(tarea: Tarea): Observable<any> {
    return this.http.post<any>(this.tareaURL + 'addTarea', tarea);
  }

  public deleteTarea(idTarea: number): Observable<any> {
    return this.http.delete<any>(this.tareaURL + `deleteTarea/${idTarea}`);
  }
}
