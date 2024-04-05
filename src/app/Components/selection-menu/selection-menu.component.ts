import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-selection-menu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './selection-menu.component.html',
  styleUrl: './selection-menu.component.css'
})
export class SelectionMenuComponent {
  @Input() menu!:string;
  @Input() linksrc!:string;

}
