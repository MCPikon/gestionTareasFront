import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login.component';
import { SignupComponent } from './auth/signup.component';
import { MenuComponent } from './menu/menu.component';
import { IndexComponent } from './index/index.component';
import { ListaTareaComponent } from './tarea/lista-tarea/lista-tarea.component';
import { NuevaTareaComponent } from './tarea/nueva-tarea/nueva-tarea.component';
import { EditarTareaComponent } from './tarea/editar-tarea/editar-tarea.component';
import { interceptorProvider } from './interceptors/prod-interceptor.service';
import { DatePipe } from '@angular/common';
import { ListaTareaCompletadaComponent } from './tarea/lista-tarea-completada/lista-tarea-completada.component';
import { ListaTareaPendienteComponent } from './tarea/lista-tarea-pendiente/lista-tarea-pendiente.component';
import { ListaTareaFechaHoyComponent } from './tarea/lista-tarea-fecha-hoy/lista-tarea-fecha-hoy.component';
import { ListaTareaFechaMesComponent } from './tarea/lista-tarea-fecha-mes/lista-tarea-fecha-mes.component';
import { ListaTareaFechaSemanaComponent } from './tarea/lista-tarea-fecha-semana/lista-tarea-fecha-semana.component';
import { ListaTareasAdminComponent } from './admin/lista-tareas-admin/lista-tareas-admin.component';
import { ListaUsuariosAdminComponent } from './admin/lista-usuarios-admin/lista-usuarios-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    MenuComponent,
    IndexComponent,
    ListaTareaComponent,
    NuevaTareaComponent,
    EditarTareaComponent,
    ListaTareaCompletadaComponent,
    ListaTareaPendienteComponent,
    ListaTareaFechaHoyComponent,
    ListaTareaFechaMesComponent,
    ListaTareaFechaSemanaComponent,
    ListaTareasAdminComponent,
    ListaUsuariosAdminComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  providers: [interceptorProvider, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
