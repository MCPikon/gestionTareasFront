import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Tarea } from 'src/app/models/tarea';
import { Usuario } from 'src/app/models/usuario';
import { TareaService } from 'src/app/services/tarea.service';
import { TokenService } from 'src/app/services/token.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-lista-tarea',
  templateUrl: './lista-tarea.component.html',
  styleUrls: ['./lista-tarea.component.css']
})
export class ListaTareaComponent implements OnInit {

  usuario: Usuario = null;
  tareas: Tarea[] = [];

  constructor(
    private usuarioService: UsuarioService, 
    private tareaService: TareaService, 
    private tokenService: TokenService, 
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
    this.cargarUsuario();
  }

  cargarUsuario(): void {
    this.usuarioService.getUsuarioByEmail(this.tokenService.getUserName()).subscribe({
      next: (response) => {
        this.usuario = response;
        this.cargarTareas(this.usuario.id);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  cargarTareas(usuarioId: number): void {
    this.tareaService.getAllByUsuarioId(usuarioId).subscribe({
      next: (response) => {
        this.tareas = response;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  borrar(idTarea: number) {
    this.tareaService.deleteTarea(idTarea).subscribe({
      next: (response) => {
        this.toastr.success('Tarea Eliminada', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.cargarUsuario();
      },
      error: (err) => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
      }
    });
  }
}
