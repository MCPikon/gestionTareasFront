import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Estado, Tarea } from 'src/app/models/tarea';
import { Usuario } from 'src/app/models/usuario';
import { TareaService } from 'src/app/services/tarea.service';
import { TokenService } from 'src/app/services/token.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-lista-tarea-fecha-mes',
  templateUrl: './lista-tarea-fecha-mes.component.html',
  styleUrls: ['./lista-tarea-fecha-mes.component.css']
})
export class ListaTareaFechaMesComponent implements OnInit {

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

        // carga las tareas carga solamente las tareas con fechaLimite en los próximos 30 días del usuario del que recoge la id
        this.cargarTareas(this.usuario.id);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  cargarTareas(usuarioId: number): void {
    this.tareaService.getAllByFechaLimiteMesAndUsuarioId(usuarioId).subscribe({
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

  /**
   * Modifica las tareas y les asigna el estado opuesto al que tenian
   * @param estado Estado de la tarea
   * @param idTarea Id de la tarea
   */
  marcarComoEstado(estado: Estado, idTarea: number) {
    if (estado === Estado.Completada) {
      this.tareaService.marcarTareaPendiente(idTarea).subscribe({
        next: (response) => {
          this.toastr.success('Tarea marcada como Pendiente', 'OK', {
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
    }else {
      this.tareaService.marcarTareaCompletada(idTarea).subscribe({
        next: (response) => {
          this.toastr.success('Tarea marcada como Completada', 'OK', {
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
}
