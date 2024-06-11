import { Component, Output, EventEmitter } from '@angular/core';
import { RouterOutlet } from '@angular/router'

@Component({
  selector: 'app-navbar-content',
  standalone: true,
  imports: [RouterOutlet  ],
  templateUrl: './navbar-content.component.html',
  styleUrl: './navbar-content.component.css'
})
export class NavbarContentComponent {
  @Output() linkClicked = new EventEmitter<string>();

  onLinkClick(link: string) {
    this.linkClicked.emit(link);
  }
}
