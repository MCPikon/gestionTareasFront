# GestionTareasFront

[![Angular](https://img.shields.io/badge/angular-13%2B-%23E23237?style=for-the-badge&logo=angular&logoColor=white&labelColor=101010)](https://angular.dev/) &nbsp;
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5%2B-%237952B3?style=for-the-badge&logo=bootstrap&logoColor=white&labelColor=101010)](https://getbootstrap.com/)

> Esta es solamente una parte del proyecto, la parte de Backend esta en el repositorio [GestionTareasBack](https://github.com/MCPikon/gestionTareasBack)

## Autor

* [Javier Picón](https://github.com/MCPikon)

## Descripción

Proyecto Final del Curso de Agrupo Sistemas que consiste en un Frontend hecho enteramente con [Angular](https://angular.dev/) (version 13.1.2) con varias dependencias de npm.

## Instalación

Para poder ejecutar el proyecto en local hay que hacer lo siguiente:

1. Clona el repositorio:

```bash
git clone https://github.com/MCPikon/gestionTareasFront.git
```

2. Entra a la carpeta del proyecto e instala las dependencias:

```bash
cd gestionTareasFront
npm install
```

3. Arranca el proyecto:

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

## Licencia

Este proyecto es de código abierto y está disponible bajo la [Licencia 2.0 de Apache](LICENSE).

---

Iconos sacados de [FontAwesome](https://fontawesome.com/).
