import { Usuario } from "./usuario";

export class Tarea {
    id?: number;
    titulo: string;
    descripcion?: string;
    estado: Estado;
    fechaCreacion: Date;
    fechaLimite?: Date;
    usuario: Usuario;

    constructor(titulo:string, descripcion:string, estado:Estado, 
        fechaCreacion:Date, fechaLimite:Date, usuario:Usuario) {
            this.titulo = titulo;
            this.descripcion = descripcion;
            this.estado = estado;
            this.fechaCreacion = fechaCreacion;
            this.fechaLimite = fechaLimite;
            this.usuario = usuario;
        }
}

export enum Estado {
    Pendiente = "Pendiente",
    Completada = "Completada"
}
