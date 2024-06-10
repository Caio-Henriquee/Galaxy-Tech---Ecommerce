import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    usuario: string= '';
    senha: string= '';

    constructor(private servicoLogin : LoginService) {}

    fazerLogin() : void{
      this.servicoLogin.login(this.usuario, this.senha);
      this.usuario = '';
      this.senha = '';
    }

    sair() : void {
      this.servicoLogin.logout;
    }
}
