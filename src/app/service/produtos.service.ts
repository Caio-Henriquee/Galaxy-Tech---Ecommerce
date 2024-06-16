import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { produtos } from '../interface/produtos.interface';
import { ProdutosPayload } from '../interface/payload-produtos.interface';
import { map } from 'rxjs/operators'; 
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export default class ProdutosService {
    httpClient = inject(HttpClient)

  getAll(){
    return this.httpClient.get<produtos[]>('api/produtos');
  }

  get(id:string){
    return this.httpClient.get<produtos>(`api/produtos/${id}`);
  }
    
  post(payload: ProdutosPayload){
    return this.httpClient.post('api/produtos', payload);
  }

  put(id: string,payload: ProdutosPayload){
    return this.httpClient.put(`api/produtos/${id}`, payload);
  }

  delete(id: string){
    return this.httpClient.delete(`api/produtos/${id}`, );
  }

  getHardwareProducts() {
    return this.httpClient.get<produtos[]>('api/produtos').pipe(
      map((produtosArray: produtos[]) => produtosArray.filter(produto => produto.categoria === 'hardware'))
    );

  }
  
  getDispositivosProducts() {
    return this.httpClient.get<produtos[]>('api/produtos').pipe(
      map((produtosArray: produtos[]) => produtosArray.filter(produto => produto.categoria === 'dispositivos'))
    );
  }

  getPerifericosProducts() {
    return this.httpClient.get<produtos[]>('api/produtos').pipe(
      map((produtosArray: produtos[]) => produtosArray.filter(produto => produto.categoria === 'perifericos'))
    );
  }

  getRandomProducts(n: number): Observable<produtos[]> {
    return this.getAll().pipe(
      map((produtosArray: produtos[]) => {
        const shuffled = produtosArray.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, n);
      })
    );
  }



}
