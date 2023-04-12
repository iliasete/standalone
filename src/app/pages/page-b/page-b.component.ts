import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component1Component } from "../../components/component1/component1.component";
import { Component2Component } from "../../components/component2/component2.component";
import { Component4Component } from "../../components/component4/component4.component";
import { Component5Component } from "../../components/component5/component5.component";

@Component({
    selector: 'app-page-b',
    standalone: true,
    imports: [CommonModule, Component1Component, Component2Component, Component4Component, Component5Component],
    template: `
    <p>
      page-b works!
    </p>

    <app-component1></app-component1>

    <app-component2></app-component2>

    <app-component4></app-component4>

    <app-component5></app-component5>
  `,
    styles: []
})
export class PageBComponent {

}
