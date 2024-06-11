import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private logado: boolean = false;
  private apiURL = 'http://localhost:3000/usuariosRegistrados'

  constructor(private http : HttpClient) {}


  isAuthenticated(): boolean {
    return this.logado;
  }

  login(usuario: string, senha: string): void {

  }

  registrar(usuario : string, email : string, senha : string, dtNasc : Date) : Observable <any>{
      const novoUsuario = {usuario, email, senha, dtNasc};
      return this.http.post(this.apiURL, novoUsuario)
  }

  logout(): void {
    this.logado = false;
  }
}
