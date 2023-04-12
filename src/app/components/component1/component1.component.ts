import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-component1',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      component1 works!
    </p>
  `,
  styles: [
  ]
})
export class Component1Component {

}
