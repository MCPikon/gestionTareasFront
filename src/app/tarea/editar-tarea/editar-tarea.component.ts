import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Tarea } from 'src/app/models/tarea';
import { TareaService } from 'src/app/services/tarea.service';

@Component({
  selector: 'app-editar-tarea',
  templateUrl: './editar-tarea.component.html',
  styleUrls: ['./editar-tarea.component.css']
})
export class EditarTareaComponent implements OnInit {

  tarea:Tarea = null;

  constructor(
    private tareaService: TareaService,
    private activateRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // recoge la tarea con el id de la ruta
    const id = this.activateRoute.snapshot.params['id'];
    this.tareaService.getTareaById(id).subscribe({
      next: (response) => {
        this.tarea = response;
      },
      error: (err) => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['/']);
      }
    });
  }

  onUpdate() {
    if(this.tarea.descripcion.trim() == '') {
      this.tarea.descripcion = null;
    }
    this.tareaService.updateTarea(this.tarea).subscribe({
      next: (response) => {
        this.toastr.success("Tarea Actualizada", 'OK', {
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
