import { CommonModule } from '@angular/common';
import { Component, Input,Output, EventEmitter  } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroEye,heroCodeBracket,heroClipboard } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-upper-content',
  standalone: true,
  imports: [CommonModule,NgIconComponent],
  templateUrl: './upper-content.component.html',
  styleUrl: './upper-content.component.css',
  providers: [provideIcons({heroEye,heroCodeBracket,heroClipboard })],
})
export class UpperContentComponent {
  @Input() header!:String;
  @Input() desc!:String;

  @Output() togglebut = new EventEmitter<boolean>();

  open:boolean = true
  toggleEvent(value: boolean) {
    value = !value
    this.open = !value;
    this.togglebut.emit(value);
  }

 



}
