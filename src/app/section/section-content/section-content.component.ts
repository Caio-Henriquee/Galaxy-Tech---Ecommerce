import { Component } from '@angular/core';
import { CardContentComponent } from '../../card/card-content/card-content.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-section-content',
  standalone: true,
  imports: [CardContentComponent,CommonModule],
  templateUrl: './section-content.component.html',
  styleUrl: './section-content.component.css'
})
export class SectionContentComponent {
  cards1 = [
    { title: 'Monitor', image: '../../../assets/MONITOR.jpg', preco: '2000', description:'Monitor game 110v.' },
    { title: 'Monitor', image: '../../../assets/MONITOR.jpg', preco: '2000',description:'Monitor game 110v.' },
    { title: 'Monitor', image: '../../../assets/MONITOR.jpg', preco: '2000' ,description:'Monitor game 110v.'},
    { title: 'Monitor', image: '../../../assets/MONITOR.jpg', preco: '2000',description:'Monitor game 110v.' },
    { title: 'Monitor', image: '../../../assets/MONITOR.jpg', preco: '2000',description:'Monitor game 110v.' },
  ];  

  cards2= [
    { title: 'Relogio', image: '../../assets/download.jpg', preco: '1400',description:'Smart Watch 110v.' },
    { title: 'Relogio', image: '../../assets/download.jpg', preco: '1400' ,description:'Smart Watch 110v.'},
    { title: 'Relogio', image: '../../assets/download.jpg', preco: '1400' ,description:'Smart Watch 110v.'},
    { title: 'Relogio', image: '../../assets/download.jpg', preco: '1400',description:'Smart Watch 110v. '},  
    { title: 'Relogio', image: '../../assets/download.jpg', preco: '1400' ,description:'Smart Watch 110v.'},
  ];
}
