import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NuevoUsuario } from '../models/nuevo-usuario';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  // variables Usuario
  nuevoUsuario: NuevoUsuario;
  nombre: string;
  email: string;
  password: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void { }

  // método Registro Usuario
  onSignUp(): void {
    this.nuevoUsuario = new NuevoUsuario(this.nombre, this.email, this.password);
    this.authService.nuevo(this.nuevoUsuario).subscribe({
      next: (response) => {
        this.toastr.success('Cuenta Creada', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        
        this.router.navigate(["/login"]);
      },
      error: (err) => {
        this.toastr.error('Campos mal introducidos y/o email inválido o ya existente', 'Error', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
      }
    });
  }

}
