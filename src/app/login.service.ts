import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private logado: boolean = false;
  private usuariosRegistrados : {usuario: string, email: string, senha: string}[] = [];

  constructor() {}

  isAuthenticated(): boolean {
    return this.logado;
  }

  login(usuario: string, senha: string): boolean {
    const user = this.usuariosRegistrados.find(user => (user.usuario === usuario && user.senha === senha));
    if(user){
      this.logado = true;
      return true;
    }
    return false;
  }

  registrar(usuario : string, email : string, senha : string) : void{
      this.usuariosRegistrados.push({usuario, email, senha});
  }

  logout(): void {
    this.logado = false;
  }
}
