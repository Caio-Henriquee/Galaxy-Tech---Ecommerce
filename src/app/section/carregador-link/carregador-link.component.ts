import { Component, OnInit } from '@angular/core';
import { SectionLiksComponent } from '../section-liks/section-liks.component';
import { CommonModule } from '@angular/common'
import { produtos } from '../../interface/produtos.interface';
import ProdutosService from '../../service/produtos.service';

@Component({
  selector: 'app-carregador-link',
  standalone: true,
  imports: [SectionLiksComponent,CommonModule],
  templateUrl: './carregador-link.component.html',
  styleUrl: './carregador-link.component.css'
})
export class CarregadorLinkComponent implements OnInit {

  produtosHardware: produtos[] = [];

  constructor(private produtosService: ProdutosService) {}

  ngOnInit(): void {
    this.produtosService.getDispositivosProducts().subscribe(
      (produtos: produtos[]) => {
        this.produtosHardware = produtos;
        console.log('Produtos de hardware:', this.produtosHardware);
        this.updateCardsDispotivos();
      },
      error => {
        console.error('Erro ao obter produtos de hardware:', error);
      }
    );
   
  }

  updateCardsDispotivos(): void {
    this.cardsDispositivos = this.produtosHardware.map(produto => ({
      nome: produto.nome, 
      valor: produto.valor.toString(),
      quantidade: produto.quantidade.toString(),
      descricao: produto.descricao ,
      url: produto.url,  
      categoria: produto.categoria,
    }));

  }
  cardsDispositivos = [
    { },
  ]; 
}
