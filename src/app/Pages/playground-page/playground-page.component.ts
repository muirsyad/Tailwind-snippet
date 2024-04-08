import { Component } from '@angular/core';
import { NavbarComponent } from '../../Components/NavbarCom/navbar/navbar.component';
import { NavbarLightComponent } from '../../Components/NavbarCom/navbar-light/navbar-light.component';
import { SideBasicComponent } from '../../Components/SidebarCom/side-basic/side-basic.component';
import { SideAccordianComponent } from '../../Components/SidebarCom/side-accordian/side-accordian.component';

@Component({
    selector: 'app-playground-page',
    standalone: true,
    templateUrl: './playground-page.component.html',
    styleUrl: './playground-page.component.css',
    imports: [NavbarComponent, NavbarLightComponent, SideBasicComponent,SideAccordianComponent]
})
export class PlaygroundPageComponent {

}
