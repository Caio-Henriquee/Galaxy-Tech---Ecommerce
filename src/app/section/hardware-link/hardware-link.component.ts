
import { Component, OnInit } from '@angular/core';
import { produtos } from '../../interface/produtos.interface';
import ProdutosService from '../../service/produtos.service';
import { SectionLiksComponent } from '../section-liks/section-liks.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hardware-link',
  standalone: true,
  imports: [SectionLiksComponent,CommonModule],
  templateUrl: './hardware-link.component.html',
  styleUrls: ['./hardware-link.component.css']
})
export class HardwareLinkComponent implements OnInit {

  produtosHardware: produtos[] = [];

  constructor(private produtosService: ProdutosService) {}

  ngOnInit(): void {
    this.produtosService.getHardwareProducts().subscribe(
      (produtos: produtos[]) => {
        this.produtosHardware = produtos;
        console.log('Produtos de hardware:', this.produtosHardware);
        this.updateCardsHardware();
      },
      error => {
        console.error('Erro ao obter produtos de hardware:', error);
      }
    );
  }

  cardsHardware = [
    { },
  ];  

  updateCardsHardware(): void {
    this.cardsHardware = this.produtosHardware.map(produto => ({
      nome: produto.nome, 
      valor: produto.valor.toString(),
      quantidade: produto.quantidade.toString(),
      descricao: produto.descricao ,
      url: produto.url,  
      categoria: produto.categoria,
    }));

  }
}

