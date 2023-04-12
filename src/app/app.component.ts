import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Component1Component } from './components/component1/component1.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, Component1Component],
  template: `
    <ul>
      <li><a routerLink="/">Home</a></li>
      <li><a routerLink="/pageA">PageA</a></li>
      <li><a routerLink="/pageB">PageB</a></li>
      <li><a routerLink="/pageC">PageC</a></li>
    </ul>

    <app-component1></app-component1>

    <hr>
    
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'standalone';
}
