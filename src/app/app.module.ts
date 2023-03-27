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
import { DetallesTareaComponent } from './tarea/detalles-tarea/detalles-tarea.component';
import { interceptorProvider } from './interceptors/prod-interceptor.service';
import { DatePipe } from '@angular/common';

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
    DetallesTareaComponent
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
