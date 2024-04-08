

import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroHome,heroUserGroup,heroFolderOpen,heroCalendarDays,heroChartPie,heroDocumentDuplicate,heroChevronRight } from '@ng-icons/heroicons/outline';



@Component({
  selector: 'app-side-accordian',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './side-accordian.component.html',
  styleUrl: './side-accordian.component.css',
  providers: [provideIcons({  heroHome,heroUserGroup,heroFolderOpen,heroCalendarDays,heroChartPie,heroDocumentDuplicate,heroChevronRight })],

})
export class SideAccordianComponent {

}

