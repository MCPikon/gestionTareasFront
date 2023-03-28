import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';
import { TokenService } from '../services/token.service';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  usuario: Usuario = null;
  email: string;

  constructor(
    private tokenService: TokenService, 
    private usuarioService: UsuarioService
    ) { }

  ngOnInit(): void {
    /** 
     * Obtiene el usuario a través del email que devuelve 
     * el tokenService para mostrar su nombre en el html del componente
    */ 
    this.email = this.tokenService.getUserName();
    if (this.email != null) {
      this.usuarioService.getUsuarioByEmail(this.email).subscribe({
        next: (response) => {
          this.usuario = response;
        },
        error: (error) => {
          console.log(error);
        }
      });
    }
  }

}
