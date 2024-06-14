import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { produtos } from '../interface/produtos.interface';
import { ProdutosPayload } from '../interface/payload-produtos.interface';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
    httpClient = inject(HttpClient)

  getAll(){
    return this.httpClient.get<produtos[]>('api/produtos');
  }
    
  post(payload: ProdutosPayload){
    return this.httpClient.post('api/produtos', payload);
  }

}
