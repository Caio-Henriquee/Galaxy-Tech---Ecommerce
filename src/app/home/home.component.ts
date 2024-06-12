import { Component } from '@angular/core';
import { HeaderContentComponent } from '../header/header-content/header-content.component';
import { SectionContentComponent } from '../section/section-content/section-content.component';

import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderContentComponent,SectionContentComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
}
