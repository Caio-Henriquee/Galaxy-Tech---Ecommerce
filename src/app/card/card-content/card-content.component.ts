import { Component,Input  } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-card-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-content.component.html',
  styleUrl: './card-content.component.css'
})
export class CardContentComponent {
  @Input() card!: { nome: string; valor: number; quantidade: number; descricao:string; url: string ;categoria: string;    };
  isCardOpen = false;


  toggleCard() {
    console.log('Toggle card');
    this.isCardOpen = !this.isCardOpen;
    console.log('Card open:', this.isCardOpen);
    console.log('Card data:', this.card);
  }
}
