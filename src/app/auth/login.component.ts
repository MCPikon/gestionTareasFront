import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginUsuario } from '../models/login-usuario';
import { AuthService } from '../services/auth.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUsuario: LoginUsuario;
  email: string;
  password: string;
  errMsg: string;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void { }

  onLogin(): void {
    this.loginUsuario = new LoginUsuario(this.email, this.password);
    this.authService.login(this.loginUsuario).subscribe({
      next: (response) => {
        this.toastr.success('Sesión Iniciada', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.tokenService.setToken(response.token);
        this.router.navigate(["/"]);
      },
      error: (err) => {
        this.errMsg = err.error.mensaje;
        this.toastr.error(this.errMsg, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
      }
    });
  }
}
