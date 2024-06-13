import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { LoginService } from '../login.service';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [RouterModule, CommonModule,FormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
    usuario : string = "";
    email : string = "";
    senha : string = "";
    dtNasc : Date = new Date(0/0/0);

    constructor(private RegistroService : LoginService, private router : Router){}

    registrar() : void {
      this.RegistroService.registrar(this.usuario, this.email, this.senha, this.dtNasc).subscribe(response =>{

      console.log("Registrado com sucesso", response);
      this.router.navigate([''])
    });
  }

}
