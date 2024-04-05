import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
// import 'zone.js';

import { provideHighlightOptions, Highlight, HighlightAuto } from 'ngx-highlightjs';
import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers';

import 'highlight.js/styles/androidstudio.min.css';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Highlight, HighlightAuto, HighlightLineNumbers],
  template: `
    <h1>ngx-highlightjs v11 beta!</h1>
      
    <pre>
      <code [highlight]="codeForHighlight"
            language="ts"
            lineNumbers></code>
    </pre>
    
    <p></p>
    <pre>
      <code [highlightAuto]="codeForHighlightAuto" 
            lineNumbers></code>
    </pre>
  `,
})
export class App {
  codeForHighlight = `export class SuperUser {
  name: string;

  contructor(name: string) {
    this.name = name;
  }
}`;

  codeForHighlightAuto = `var testString = @$"
   Some multi-
   line text
";
  `;
}

bootstrapApplication(App, {
  providers: [
    provideHighlightOptions({
      fullLibraryLoader: () => import('highlight.js'),
      lineNumbersLoader: () => import('ngx-highlightjs/line-numbers')
    }),
  ],
});
