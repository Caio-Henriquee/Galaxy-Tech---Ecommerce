import { Component } from '@angular/core';
import { SectionLiksComponent } from '../section-liks/section-liks.component';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-carregador-link',
  standalone: true,
  imports: [SectionLiksComponent,CommonModule],
  templateUrl: './carregador-link.component.html',
  styleUrl: './carregador-link.component.css'
})
export class CarregadorLinkComponent {
  cards = [
    { title: 'Monitor', image: '../../../assets/MONITOR.jpg', preco: '100', description:'Monitor game 110v.' },
    { title: 'Monitor', image: '../../../assets/MONITOR.jpg', preco: '100',description:'Monitor game 110v.' },
    { title: 'Monitor', image: '../../../assets/MONITOR.jpg', preco: '100' ,description:'Monitor game 110v.'},
    { title: 'Monitor', image: '../../../assets/MONITOR.jpg', preco: '100',description:'Monitor game 110v.' },
    { title: 'Monitor', image: '../../../assets/MONITOR.jpg', preco: '100',description:'Monitor game 110v.' },
  ]; 
}
