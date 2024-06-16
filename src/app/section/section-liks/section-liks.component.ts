import { Component, Input } from '@angular/core';
import { CardContentComponent } from '../../card/card-content/card-content.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-section-liks',
  standalone: true,
  imports: [CardContentComponent,CommonModule],
  templateUrl: './section-liks.component.html',
  styleUrl: './section-liks.component.css'
})


export class SectionLiksComponent {
  @Input() cards: any[] = [];
}
