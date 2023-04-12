import { bootstrapApplication } from "@angular/platform-browser";
import { provideRouter, Routes } from "@angular/router";
import { AppComponent } from "./app/app.component";
import { HomeComponent } from "./app/pages/home/home.component";

const ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'pageA',
    loadComponent: () => import('./app/pages/page-a/page-a.component').then(m => m.PageAComponent)
  },
  {
    path: 'pageB',
    loadComponent: () => import('./app/pages/page-b/page-b.component').then(m => m.PageBComponent)
  },
  {
    path: 'pageC',
    loadComponent: () => import('./app/pages/page-c/page-c.component').then(m => m.PageCComponent)
  }

];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(ROUTES)
  ]
});