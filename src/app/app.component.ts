import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import {Highlight, HighlightAuto } from 'ngx-highlightjs';
import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Highlight, HighlightAuto, HighlightLineNumbers, RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './app.component.html',
  
})
export class AppComponent {
  title = 'main page'
  codeForHighlight = `export class SuperUser {
    nameuser: string;
  
    contructor(name: string) {
      this.name = name;
    }
  }`;
  
    codeForHighlightAuto = `<h1>asas</h1>
    <div> test</div>
    `;
}
