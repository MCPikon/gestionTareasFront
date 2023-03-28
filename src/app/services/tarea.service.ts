import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Estado, Tarea } from '../models/tarea';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  // URL Tareas - Backend
  tareaURL = environment.tareaURL;

  constructor(private http: HttpClient) { }

  // métodos GET
  public getAll() {
    return this.http.get<Tarea[]>(this.tareaURL + 'getAll');
  }

  public getAllByUsuarioId(usuarioId: number) {
    return this.http.get<Tarea[]>(this.tareaURL + `getAllByUsuarioId/${usuarioId}`);
  }

  public getAllByFechaLimiteHoyAndUsuarioId(usuarioId: number) {
    return this.http.get<Tarea[]>(this.tareaURL + `getAllByFechaLimiteHoyAndUsuarioId/${usuarioId}`);
  }

  public getAllByFechaLimiteSemanaAndUsuarioId(usuarioId: number) {
    return this.http.get<Tarea[]>(this.tareaURL + `getAllByFechaLimiteSemanaAndUsuarioId/${usuarioId}`);
  }

  public getAllByFechaLimiteMesAndUsuarioId(usuarioId: number) {
    return this.http.get<Tarea[]>(this.tareaURL + `getAllByFechaLimiteMesAndUsuarioId/${usuarioId}`);
  }

  public getAllByEstadoAndUsuarioId(estado:Estado, usuarioId: number) {
    return this.http.get<Tarea[]>(this.tareaURL + `getAllByEstadoAndUsuarioId/${estado}/${usuarioId}`);
  }

  // métodos POST
  public addTarea(tarea: Tarea): Observable<any> {
    return this.http.post<any>(this.tareaURL + 'addTarea', tarea);
  }

  // métodos DELETE
  public deleteTarea(idTarea: number): Observable<any> {
    return this.http.delete<any>(this.tareaURL + `deleteTarea/${idTarea}`);
  }

  public getTareaById(idTarea: number): Observable<Tarea> {
    return this.http.get<Tarea>(this.tareaURL + `findById/${idTarea}`);
  }

  // métodos PUT
  public updateTarea(tarea: Tarea): Observable<any> {
    return this.http.put<any>(this.tareaURL + 'updateTarea', tarea);
  }

  public marcarTareaCompletada(idTarea: number): Observable<any> {
    return this.http.put<any>(this.tareaURL + 'marcarTareaCompletada', idTarea);
  }

  public marcarTareaPendiente(idTarea: number): Observable<any> {
    return this.http.put<any>(this.tareaURL + 'marcarTareaPendiente', idTarea);
  }
}
