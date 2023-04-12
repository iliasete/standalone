import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component1Component } from "../../components/component1/component1.component";
import { Component6Component } from "../../components/component6/component6.component";
import { Component5Component } from "../../components/component5/component5.component";
import { Component7Component } from "../../components/component7/component7.component";
import { Component8Component } from "../../components/component8/component8.component";

@Component({
    selector: 'app-page-c',
    standalone: true,
    template: `
    <p>
      page-c works!
    </p>

    <app-component1></app-component1>

    <app-component5></app-component5>

    <app-component6></app-component6>

    <app-component7></app-component7>

    <app-component8></app-component8>
  `,
    styles: [],
    imports: [CommonModule, Component1Component, Component5Component, Component6Component, Component7Component, Component8Component]
})
export class PageCComponent {

}
