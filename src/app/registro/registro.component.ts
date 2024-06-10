import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [RouterModule, CommonModule,],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
    usuario : string = '';
    email : string = '';
    senha : string = '';

    constructor(private RegistroService : LoginService){}

    registrar() : void {
      this.RegistroService.registrar(this.usuario, this.email, this.senha);
      console.log("Registrado com sucesso");
      this.usuario = '';
      this.email = '';
      this.senha= '';
    }
}
