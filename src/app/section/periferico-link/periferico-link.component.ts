import { Component } from '@angular/core';
import { SectionLiksComponent } from '../section-liks/section-liks.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-periferico-link',
  standalone: true,
  imports: [SectionLiksComponent,CommonModule],
  templateUrl: './periferico-link.component.html',
  styleUrl: './periferico-link.component.css'
})
export class PerifericoLinkComponent {
    cards = [
      { title: 'Monitor', image: '../../../assets/MONITOR.jpg', preco: '2000', description:'Monitor game 110v.' },
      { title: 'Monitor', image: '../../../assets/MONITOR.jpg', preco: '2000',description:'Monitor game 110v.' },
      { title: 'Monitor', image: '../../../assets/MONITOR.jpg', preco: '2000' ,description:'Monitor game 110v.'},
      { title: 'Monitor', image: '../../../assets/MONITOR.jpg', preco: '2000',description:'Monitor game 110v.' },
      { title: 'Monitor', image: '../../../assets/MONITOR.jpg', preco: '2000',description:'Monitor game 110v.' },
    ];  
}

