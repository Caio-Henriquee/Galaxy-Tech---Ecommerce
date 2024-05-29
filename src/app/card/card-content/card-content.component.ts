import { Component,Input  } from '@angular/core';

@Component({
  selector: 'app-card-content',
  standalone: true,
  imports: [],
  templateUrl: './card-content.component.html',
  styleUrl: './card-content.component.css'
})
export class CardContentComponent {
  @Input() card!: { image: string; title: string; preco: string };
}
