import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaTareasAdminComponent } from './admin/lista-tareas-admin/lista-tareas-admin.component';
import { ListaUsuariosAdminComponent } from './admin/lista-usuarios-admin/lista-usuarios-admin.component';
import { LoginComponent } from './auth/login.component';
import { SignupComponent } from './auth/signup.component';
import { LoginGuard } from './guards/login.guard';
import { ProdGuardService } from './guards/prod-guard.service';
import { IndexComponent } from './index/index.component';
import { EditarTareaComponent } from './tarea/editar-tarea/editar-tarea.component';
import { ListaTareaCompletadaComponent } from './tarea/lista-tarea-completada/lista-tarea-completada.component';
import { ListaTareaFechaHoyComponent } from './tarea/lista-tarea-fecha-hoy/lista-tarea-fecha-hoy.component';
import { ListaTareaFechaMesComponent } from './tarea/lista-tarea-fecha-mes/lista-tarea-fecha-mes.component';
import { ListaTareaFechaSemanaComponent } from './tarea/lista-tarea-fecha-semana/lista-tarea-fecha-semana.component';
import { ListaTareaPendienteComponent } from './tarea/lista-tarea-pendiente/lista-tarea-pendiente.component';
import { ListaTareaComponent } from './tarea/lista-tarea/lista-tarea.component';
import { NuevaTareaComponent } from './tarea/nueva-tarea/nueva-tarea.component';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'login', component: LoginComponent, canActivate: [LoginGuard]},
  {path: 'signup', component: SignupComponent, canActivate: [LoginGuard]},
  {path: 'lista', component: ListaTareaComponent, canActivate: [ProdGuardService], data: { expectedRol: ['admin', 'user'] }},
  {path: 'lista-completadas', component: ListaTareaCompletadaComponent, canActivate: [ProdGuardService], data: { expectedRol: ['admin', 'user'] }},
  {path: 'lista-pendientes', component: ListaTareaPendienteComponent, canActivate: [ProdGuardService], data: { expectedRol: ['admin', 'user'] }},
  {path: 'lista-fecha-hoy', component: ListaTareaFechaHoyComponent, canActivate: [ProdGuardService], data: { expectedRol: ['admin', 'user'] }},
  {path: 'lista-fecha-semana', component: ListaTareaFechaSemanaComponent, canActivate: [ProdGuardService], data: { expectedRol: ['admin', 'user'] }},
  {path: 'lista-fecha-mes', component: ListaTareaFechaMesComponent, canActivate: [ProdGuardService], data: { expectedRol: ['admin', 'user'] }},
  {path: 'nuevo', component: NuevaTareaComponent, canActivate: [ProdGuardService], data: { expectedRol: ['admin', 'user'] }},
  {path: 'editar/:id', component: EditarTareaComponent, canActivate: [ProdGuardService], data: { expectedRol: ['admin', 'user'] }},
  {path: 'lista-tareas-admin', component: ListaTareasAdminComponent, canActivate: [ProdGuardService], data: { expectedRol: ['admin'] }},
  {path: 'lista-usuarios-admin', component: ListaUsuariosAdminComponent, canActivate: [ProdGuardService], data: { expectedRol: ['admin'] }},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
