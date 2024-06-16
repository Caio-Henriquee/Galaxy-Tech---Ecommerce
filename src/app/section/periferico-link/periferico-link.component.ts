import { Component, OnInit } from '@angular/core';
import { SectionLiksComponent } from '../section-liks/section-liks.component';
import { CommonModule } from '@angular/common';
import ProdutosService from '../../service/produtos.service';
import { produtos } from '../../interface/produtos.interface';

@Component({
  selector: 'app-periferico-link',
  standalone: true,
  imports: [SectionLiksComponent,CommonModule],
  templateUrl: './periferico-link.component.html',
  styleUrl: './periferico-link.component.css'
})
export class PerifericoLinkComponent implements OnInit {
  produtosPerifericos: produtos[] = [];

  constructor(private produtosService: ProdutosService) {}

  ngOnInit(): void {
    this.produtosService.getPerifericosProducts().subscribe(
      (produtos: produtos[]) => {
        this.produtosPerifericos = produtos;
        console.log('Produtos de hardware:', this.produtosPerifericos);
        this.updateCardsHardware();
      },
      error => {
        console.error('Erro ao obter produtos de hardware:', error);
      }
    );
  }

  cardsPerifericos = [
    { },
  ];  

  updateCardsHardware(): void {
    this.cardsPerifericos = this.produtosPerifericos.map(produto => ({
      nome: produto.nome, 
      valor: produto.valor.toString(),
      quantidade: produto.quantidade.toString(),
      descricao: produto.descricao ,
      url: produto.url,  
      categoria: produto.categoria,
    }));

  } 
}

