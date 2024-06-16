import { Component } from '@angular/core';
import { CardContentComponent } from '../../card/card-content/card-content.component';
import { CommonModule } from '@angular/common';
import ProdutosService from '../../service/produtos.service';
import { produtos } from '../../interface/produtos.interface';
@Component({
  selector: 'app-section-content',
  standalone: true,
  imports: [CardContentComponent,CommonModule],
  templateUrl: './section-content.component.html',
  styleUrl: './section-content.component.css'
})
export class SectionContentComponent {
  cards1: produtos[] = [];
  cards2: produtos[] = [];

  constructor(private produtosService: ProdutosService) {}

  ngOnInit(): void {
    this.produtosService.getRandomProducts(10).subscribe(
      (produtos: produtos[]) => {
        const half = Math.ceil(produtos.length / 2);
        this.cards1 = produtos.slice(0, half);
        this.cards2 = produtos.slice(half, produtos.length);
      },
      error => {
        console.error('Erro ao obter produtos aleatórios:', error);
      }
    );
  }
}
