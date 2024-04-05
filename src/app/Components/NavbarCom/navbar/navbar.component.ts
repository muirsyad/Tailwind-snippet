import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroUsers,heroBellAlert,heroBars3 } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgIconComponent,CommonModule],
  providers: [provideIcons({heroUsers,heroBellAlert,heroBars3 })],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  open:boolean = false;
  menu:boolean = false;

  toggle(){
    this.open = !this.open;
  }
  togglemenu(){
    this.menu = !this.menu;
  }
  hide(){
    this.open = !this.open;
  }
}
