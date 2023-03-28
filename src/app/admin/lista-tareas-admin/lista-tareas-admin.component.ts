import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/tarea';
import { TareaService } from 'src/app/services/tarea.service';

@Component({
  selector: 'app-lista-tareas-admin',
  templateUrl: './lista-tareas-admin.component.html',
  styleUrls: ['./lista-tareas-admin.component.css']
})
export class ListaTareasAdminComponent implements OnInit {

  tareas: Tarea[] = [];

  constructor(
    private tareaService: TareaService
    ) { }

  ngOnInit(): void {
    this.cargarTareas();
  }

  cargarTareas(): void {
    this.tareaService.getAll().subscribe({
      next: (response) => {
        this.tareas = response;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
