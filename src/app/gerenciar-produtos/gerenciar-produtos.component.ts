import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { producerAccessed } from '@angular/core/primitives/signals';
import { ProdutosService } from '../service/produtos.service';
import { produtos } from '../interface/produtos.interface';

@Component({
  selector: 'app-gerenciar-produtos',
  standalone: true,
  imports: [],
  templateUrl: './gerenciar-produtos.component.html',
  styleUrl: './gerenciar-produtos.component.css'
})
export class GerenciarProdutosComponent{

  produtos: produtos[] = [];

  produtosService = inject(ProdutosService);

  ngOnInit(){
    this.produtosService.getAll().subscribe((produtos)=>{
      this.produtos = produtos;
    })
  }
}
