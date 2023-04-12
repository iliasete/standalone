import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component1Component } from 'src/app/components/component1/component1.component';
import { Component2Component } from 'src/app/components/component2/component2.component';
import { Component3Component } from 'src/app/components/component3/component3.component';

@Component({
  selector: 'app-page-a',
  standalone: true,
  imports: [CommonModule, Component1Component, Component2Component, Component3Component],
  template: `
    <p>
      page-a works!
    </p>

    <app-component1></app-component1>

    <app-component2></app-component2>
    
    <app-component3></app-component3>
  `,
  styles: [
  ]
})
export class PageAComponent {

}
