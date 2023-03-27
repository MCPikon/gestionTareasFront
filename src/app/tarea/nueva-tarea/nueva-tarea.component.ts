import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Estado, Tarea } from 'src/app/models/tarea';
import { Usuario } from 'src/app/models/usuario';
import { TareaService } from 'src/app/services/tarea.service';
import { TokenService } from 'src/app/services/token.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-nueva-tarea',
  templateUrl: './nueva-tarea.component.html',
  styleUrls: ['./nueva-tarea.component.css']
})
export class NuevaTareaComponent implements OnInit {

  titulo = '';
  descripcion:string = null;
  estado:Estado = null;
  fechaCreacion:Date = new Date();
  fechaLimite:Date = null;

  usuario:Usuario = null;

  constructor(
    private router: Router,
    private tokenService: TokenService,
    private usuarioService: UsuarioService,
    private tareaService: TareaService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  getUserAddTarea(): void {
    this.usuarioService.getUsuarioByEmail(this.tokenService.getUserName()).subscribe({
      next: (response) => {
        this.usuario = response;
        this.addTarea(this.usuario);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  addTarea(usuario: Usuario): void {
    const tarea = new Tarea(this.titulo, this.descripcion, this.estado, this.fechaCreacion, this.fechaLimite, usuario);
    this.tareaService.addTarea(tarea).subscribe({
      next: (response) => {
        this.toastr.success('Tarea Creada', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/lista']);
      },
      error: (err) => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    });
  }
}
