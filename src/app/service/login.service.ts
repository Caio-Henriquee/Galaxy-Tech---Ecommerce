import { usuarios } from './../interface/login.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { LoginPayload } from '../interface/payload-login.interface';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  httpClient = inject(HttpClient);

  getAll(){
    return this.httpClient.get<usuarios[]>('api/usuariosRegistrados');
  }

  post(payload : LoginPayload){
    return this.httpClient.post('api/usuariosRegistrados', payload);
  }

}
