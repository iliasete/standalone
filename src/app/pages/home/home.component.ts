import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component1Component } from 'src/app/components/component1/component1.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, Component1Component],
  template: `
    <p>
      home works!
    </p>
    
    <app-component1></app-component1>
  `,
  styles: [
  ]
})
export class HomeComponent {

}
