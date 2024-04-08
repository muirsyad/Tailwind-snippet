import { Component } from '@angular/core';
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
