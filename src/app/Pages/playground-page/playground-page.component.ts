import { Component } from '@angular/core';
import { NavbarComponent } from '../../Components/NavbarCom/navbar/navbar.component';
import { NavbarLightComponent } from '../../Components/NavbarCom/navbar-light/navbar-light.component';

@Component({
  selector: 'app-playground-page',
  standalone: true,
  imports: [NavbarComponent,NavbarLightComponent],
  templateUrl: './playground-page.component.html',
  styleUrl: './playground-page.component.css'
})
export class PlaygroundPageComponent {

}
