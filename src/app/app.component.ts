import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { SectionContentComponent } from './section/section-content/section-content.component';
import { HeaderContentComponent } from './header/header-content/header-content.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, SectionContentComponent,HeaderContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'galaxyTech';
}
