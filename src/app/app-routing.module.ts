import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login.component';
import { SignupComponent } from './auth/signup.component';
import { LoginGuard } from './guards/login.guard';
import { ProdGuardService } from './guards/prod-guard.service';
import { IndexComponent } from './index/index.component';
import { EditarTareaComponent } from './tarea/editar-tarea/editar-tarea.component';
import { ListaTareaComponent } from './tarea/lista-tarea/lista-tarea.component';
import { NuevaTareaComponent } from './tarea/nueva-tarea/nueva-tarea.component';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'login', component: LoginComponent, canActivate: [LoginGuard]},
  {path: 'signup', component: SignupComponent, canActivate: [LoginGuard]},
  {path: 'lista', component: ListaTareaComponent, canActivate: [ProdGuardService], data: { expectedRol: ['admin', 'user'] }},
  {path: 'nuevo', component: NuevaTareaComponent, canActivate: [ProdGuardService], data: { expectedRol: ['admin', 'user'] }},
  {path: 'editar/:id', component: EditarTareaComponent, canActivate: [ProdGuardService], data: { expectedRol: ['admin', 'user'] }},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
