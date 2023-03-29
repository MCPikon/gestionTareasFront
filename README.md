# GestionTareasFront

> Esta es solamente una parte del proyecto, la parte de Backend esta en el repositorio [GestionTareasBack](https://github.com/MCPikon/gestionTareasBack)

## Autor

* [Javier Picón](https://github.com/MCPikon)

## Descripción

Proyecto Final del Curso de Agrupo Sistemas que consiste en un Frontend hecho enteramente con Angular (version 13.1.2) con varias dependencias de npm.

## Instalación

```bash
cd gestionTareasFront/
npm install
```

Una vez instalado se ejecuta de la siguiente manera:

```bash
ng serve
```

## Tecnologías

* Angular 13.1.2
* ngx-toastr 14.3.0
* @angular/animations 13.1.0
* Bootstrap 5.3 (vía CDN)
* font-awesome 6.3.0 (vía CDN)

## Cómo funciona

Este proyecto consta de diferentes partes:

* **Parte de seguridad** *(auth, guards, interceptors, auth-service y token-service)*: Se encargan de la parte de Inicio de Sesión/Registro comunicandose con la parte de Backend, y de interceptar las peticiones a rutas, aceptándolas o denegándolas dependendiendo de si el usuario esta Registrado y Logeado o tiene rol de Admin y/o Usuario.

* **Parte Web** *(demás componentes y servicios)*: Se encarga de la vista de la Web, así como de recibir y mandar peticiones al Backend y mostrar los registros obtenidos.
