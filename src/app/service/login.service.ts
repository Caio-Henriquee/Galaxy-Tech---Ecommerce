import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { usuarios } from '../interface/login.interface';
import { LoginPayload } from '../interface/payload-login.interface';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  httpClient = inject(HttpClient);

  getAll(){
    return this.httpClient.get<usuarios[]>('api/registro');
  }

  post(payload : LoginPayload){
    return this.httpClient.post('api/registro', payload);
  }

}
