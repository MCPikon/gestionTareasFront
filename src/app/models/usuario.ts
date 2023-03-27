import { Tarea } from "./tarea";

export class Usuario {
    id?: number;
    nombre: string;
    email: string;
    password: string;
    tareas: Tarea[];

    constructor(id:number, nombre:string, email:string, password:string, tareas:Tarea[]) {
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.password = password;
        this.tareas = tareas;
    }
}