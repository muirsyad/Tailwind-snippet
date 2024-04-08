import { Component } from '@angular/core';
import { UpperContentComponent } from "../../Components/upper-content/upper-content.component";

import { NgIconComponent, provideIcons } from '@ng-icons/core';

import { HighlightAuto } from 'ngx-highlightjs';
import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers';
import { CommonModule } from '@angular/common';
import {ClipboardModule} from '@angular/cdk/clipboard';
import { heroClipboard, heroCodeBracket, heroEye } from '@ng-icons/heroicons/outline';
import { SideBasicComponent } from '../../Components/SidebarCom/side-basic/side-basic.component';


@Component({
    selector: 'app-side-page',
    standalone: true,
    templateUrl: './side-page.component.html',
    styleUrl: './side-page.component.css',
    imports: [UpperContentComponent,HighlightAuto,HighlightLineNumbers,CommonModule,ClipboardModule, NgIconComponent,SideBasicComponent],
    providers: [provideIcons({heroEye,heroCodeBracket,heroClipboard })],
})
export class SidePageComponent {

togglenav(path: string) {
    switch (path) {
        case 'html':
            this.navbarhtml[0] = true;
            this.navts[0] = false;
            break;
        case 'ts':
            this.navbarhtml[0] = false;
            this.navts[0] = true;
        break;
    
        default:
            break;
    }
}

  navbarhtml:boolean[] = [true,false];
  navts:boolean[] = [false,false]; 
  open:boolean[] = [true,true];
  code:string[]=[`<div class="w-[290px] bg-gray-900 h-full flex flex-col justify-between py-2 text-white">
   
  <div class="flex-col">
      <div class="text-white w-[40px] m-5"><img src="../../../../assets/img/tailwindimg.svg" alt=""></div>
      <div class="text-white bg-slate-700 rounded-lg cursor-pointer m-5 p-2 flex gap-x-5"><ng-icon class="text-2xl " name="heroHome"></ng-icon><span class="text-lg">Dashboard</span></div>
      <div class="text-white hover:bg-slate-700 cursor-pointer rounded-lg m-5 p-2 flex gap-x-5"><ng-icon class="text-2xl " name="heroUserGroup"></ng-icon><span class="text-lg">Team</span></div>
      <div class="text-white hover:bg-slate-700 cursor-pointer rounded-lg m-5 p-2 flex gap-x-5"><ng-icon class="text-2xl " name="heroFolderOpen"></ng-icon><span class="text-lg">Project</span></div>
      <div class="text-white hover:bg-slate-700 cursor-pointer rounded-lg m-5 p-2 flex gap-x-5"><ng-icon class="text-2xl " name="heroCalendarDays"></ng-icon><span class="text-lg">Calender</span></div>
      <div class="text-white hover:bg-slate-700 cursor-pointer rounded-lg m-5 p-2 flex gap-x-5"><ng-icon class="text-2xl " name="heroDocumentDuplicate"></ng-icon><span class="text-lg">Documents</span></div>
      <div class="text-white hover:bg-slate-700 cursor-pointer rounded-lg m-5 p-2 flex gap-x-5"><ng-icon class="text-2xl " name="heroChartPie"></ng-icon><span class="text-lg">Report</span></div>
  </div>
  
  <div class="flex gap-x-5 m-5">
      <img src="../../../../assets/img/progile.avif" class="w-[30px] rounded-full" alt="">
      <span class="text-white text-lg self-center">John Doe</span>
  </div>
</div>
`,''];
codets:string[]=[`import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroHome,heroUserGroup,heroFolderOpen,heroCalendarDays,heroChartPie,heroDocumentDuplicate } from '@ng-icons/heroicons/outline';



@Component({
  selector: 'app-side-basic',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './side-basic.component.html',
  styleUrl: './side-basic.component.css',
  providers: [provideIcons({  heroHome,heroUserGroup,heroFolderOpen,heroCalendarDays,heroChartPie,heroDocumentDuplicate })],

})
export class SideBasicComponent {

}
`,``];

onEvent(value:boolean, id:number){
  
    if(value == true){
          this.open[id] = false;
        }else{
          this.open[id] = true;
        }
   }
 
 
}
