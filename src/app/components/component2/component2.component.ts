import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-component2',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      component2 works!
    </p>
  `,
  styles: [
  ]
})
export class Component2Component {

}
