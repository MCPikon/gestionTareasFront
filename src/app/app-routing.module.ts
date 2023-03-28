import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login.component';
import { SignupComponent } from './auth/signup.component';
import { LoginGuard } from './guards/login.guard';
import { ProdGuardService } from './guards/prod-guard.service';
import { IndexComponent } from './index/index.component';
import { EditarTareaComponent } from './tarea/editar-tarea/editar-tarea.component';
import { ListaTareaCompletadaComponent } from './tarea/lista-tarea-completada/lista-tarea-completada.component';
import { ListaTareaFechaComponent } from './tarea/lista-tarea-fecha/lista-tarea-fecha.component';
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
  {path: 'lista-fechas', component: ListaTareaFechaComponent, canActivate: [ProdGuardService], data: { expectedRol: ['admin', 'user'] }},
  {path: 'nuevo', component: NuevaTareaComponent, canActivate: [ProdGuardService], data: { expectedRol: ['admin', 'user'] }},
  {path: 'editar/:id', component: EditarTareaComponent, canActivate: [ProdGuardService], data: { expectedRol: ['admin', 'user'] }},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
