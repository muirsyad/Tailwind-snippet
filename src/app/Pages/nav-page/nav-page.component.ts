import { Component } from '@angular/core';
import { NavbarComponent } from '../../Components/NavbarCom/navbar/navbar.component';

import { HighlightAuto } from 'ngx-highlightjs';
import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroEye,heroCodeBracket,heroClipboard } from '@ng-icons/heroicons/outline';
import { CommonModule } from '@angular/common';
import {ClipboardModule} from '@angular/cdk/clipboard';
import { UpperContentComponent } from '../../Components/upper-content/upper-content.component';
import { NavbarLightComponent } from '../../Components/NavbarCom/navbar-light/navbar-light.component';


@Component({
  selector: 'app-nav-page',
  standalone: true,
  imports: [NavbarComponent,NavbarLightComponent,HighlightAuto, HighlightLineNumbers,NgIconComponent,CommonModule,ClipboardModule,UpperContentComponent],
  templateUrl: './nav-page.component.html',
  styleUrl: './nav-page.component.css',
  providers: [provideIcons({heroEye,heroCodeBracket,heroClipboard })],

})
export class NavPageComponent {

  navbarhtml:boolean = true;
  navts:boolean = false; 

  codetsar:Array<string> = [
    'sas'
  ];
  codehtmlar:Array<string> = [`<!-- app-navbar-light -->
  <nav class="bg-white px-10 border-b-2 ">
      <ul class="hidden lg:flex justify-between ">
          <div class=" flex gap-x-5  items-stretch text-black ">
              <li class=" py-5"><img class="w-10 self-center" src="../../../assets/img/tailwindimg.svg" alt="" srcset=""></li>
              <li class=" self-center border-b-2  py-7 border-b-indigo-500"> <span class="">Dashboard</span></li>
              <li class="self-center hover:border-b-blue-400 hover:border-b-2  py-7">Team</li>
              <li class="self-center hover:border-b-blue-400 hover:border-b-2  py-7">Project</li>
              <li class="self-center hover:border-b-blue-400 hover:border-b-2  py-7">Calender</li>
          </div>
          <div class="flex gap-x-5 relative">
              <ng-icon (click)="toggle()"  class="text-black self-center text-3xl" name="heroBellAlert"></ng-icon>
              <ul  [ngClass]="open? 'block' : 'hidden' "  class=" text-black absolute z-10 top-10 right-10  bg-white border-2 shadow-md w-[150px] rounded-md  py-3">
                  <li class="py-1 px-2 hover:bg-slate-100 ">Profile</li>
                  <li class="py-1 px-2 hover:bg-slate-100">Setting</li>
                  <li class="py-1 px-2 hover:bg-slate-100">Signout</li>
   
              </ul>
              
              <li class="self-center"><img class="w-10 rounded-full " src="../../../assets/img/progile.avif" alt=""></li>
   
          </div>
      </ul>
      
      <ul class="flex lg:hidden justify-between">
          <div class="flex flex-col">
           <ng-icon (click)="togglemenu()" class="text-black self-center text-3xl" name="heroBars3"></ng-icon>
          </div>
           
           <div class="flex">
               <li><img class="w-10 self-center" src="../../../assets/img/tailwindimg.svg" alt="" srcset=""></li>
           </div>
   
           <div class="flex gap-x-5">
               <ng-icon (click)="toggle()"  class="text-black self-center text-3xl" name="heroBellAlert"></ng-icon>
   
               <ul  [ngClass]="open? 'block' : 'hidden' "  class=" text-black absolute z-10 top-10 right-10  bg-white border-2 shadow-md w-[150px] rounded-md  py-3">
                   <li class="py-1 px-2 hover:bg-slate-100 ">Profile</li>
                   <li class="py-1 px-2 hover:bg-slate-100">Setting</li>
                   <li class="py-1 px-2 hover:bg-slate-100">Signout</li>
       
               </ul>
               <li><img class="w-10 rounded-full" src="../../../assets/img/progile.avif" alt=""></li>
           </div>
           
   
       </ul>
       <ul class=" duration-300" [ngClass]="menu ? 'block' : 'hidden' ">
          <li class="self-center bg-indigo-50 border-l-4 border-l-indigo-500 p-2  text-black">Dashboard</li>
          <li class="self-center hover:bg-slate-50 p-2 hover:border-l-slate-600 hover:border-l-4  text-black">Team</li>
          <li class="self-center hover:bg-slate-50 p-2 hover:border-l-slate-600 hover:border-l-4  text-black">Project</li>
          <li class="self-center hover:bg-slate-50 p-2 hover:border-l-slate-600 hover:border-l-4  text-black">Calender</li>
      </ul>  
      <div (click)="hide()" [ngClass]="open? 'block' : 'hidden' "  class="bg-slate-200 opacity-35 inset-0 z-0 w-full absolute"></div>
  </nav>`,''];

  

  

  togglenav(components:String){
    switch (components) {
      case 'html':
        this.navbarhtml = true
        this.navts = false
        break;
      case 'ts':
        this.navbarhtml = false
        this.navts = true
      
        break;
    
      default:
        break;
    }
  }

  code = `<!-- nav-page.component.html -->
  <nav class="bg-cyan-900 px-10 py-4">
    <ul class="hidden lg:flex justify-between">
        <div class=" flex gap-x-5 text-white">
            <li><img class="w-10 self-center" src="../../../assets/img/tailwindimg.svg" alt="" srcset=""></li>
            <li class="self-center bg-cyan-950 p-2 rounded-md">Dashboard</li>
            <li class="self-center hover:bg-slate-400 p-2 rounded-md">Team</li>
            <li class="self-center hover:bg-slate-400 p-2 rounded-md">Project</li>
            <li class="self-center hover:bg-slate-400 p-2 rounded-md">Calender</li>
        </div>
        <div class="flex gap-x-5 relative">
            <ng-icon (click)="toggle()"  class="text-white self-center text-3xl" name="heroBellAlert"></ng-icon>
            <ul  [ngClass]="open? 'block' : 'hidden' "  class=" text-black absolute z-10 top-10 right-10  bg-white border-2 shadow-md w-[150px] rounded-md  py-3">
                <li class="py-1 px-2 hover:bg-slate-100 ">Profile</li>
                <li class="py-1 px-2 hover:bg-slate-100">Setting</li>
                <li class="py-1 px-2 hover:bg-slate-100">Signout</li>

            </ul>
            
            <li><img class="w-10 rounded-full" src="../../../assets/img/progile.avif" alt=""></li>

        </div>
    </ul>
    
    <ul class="flex lg:hidden justify-between">
        <div class="flex flex-col">
         <ng-icon (click)="togglemenu()" class="text-white self-center text-3xl" name="heroBars3"></ng-icon>
        </div>
         
         <div class="flex">
             <li><img class="w-10 self-center" src="../../../assets/img/tailwindimg.svg" alt="" srcset=""></li>
         </div>
 
         <div class="flex gap-x-5">
             <ng-icon (click)="toggle()"  class="text-white self-center text-3xl" name="heroBellAlert"></ng-icon>
 
             <ul  [ngClass]="open? 'block' : 'hidden' "  class=" text-black absolute z-10 top-10 right-10  bg-white border-2 shadow-md w-[150px] rounded-md  py-3">
                 <li class="py-1 px-2 hover:bg-slate-100 ">Profile</li>
                 <li class="py-1 px-2 hover:bg-slate-100">Setting</li>
                 <li class="py-1 px-2 hover:bg-slate-100">Signout</li>
     
             </ul>
             <li><img class="w-10 rounded-full" src="../../../assets/img/progile.avif" alt=""></li>
         </div>
         
 
     </ul>
     <ul class=" duration-300" [ngClass]="menu ? 'block' : 'hidden' ">
        <li class="self-center bg-cyan-950 p-2 rounded-md text-white">Dashboard</li>
        <li class="self-center hover:bg-slate-400 p-2 rounded-md text-white">Team</li>
        <li class="self-center hover:bg-slate-400 p-2 rounded-md text-white">Project</li>
        <li class="self-center hover:bg-slate-400 p-2 rounded-md text-white">Calender</li>
    </ul>  
    <div (click)="hide()" [ngClass]="open? 'block' : 'hidden' "  class="bg-slate-200 opacity-35 inset-0 z-0 w-full absolute"></div>
</nav>

`
codets=`//nav-page.component.ts
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

`;

// codehtmlar[0]=['ss'];
 open:boolean[] = [true,true];
 onEvent(value:boolean, id:number){
  
  if(value == true){
        this.open[id] = false;
      }else{
        this.open[id] = true;
      }
 }


}
