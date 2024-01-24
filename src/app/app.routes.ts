import { Routes } from '@angular/router';
import { MainMenuComponent } from './main-menu/main-menu.component';

export const routes: Routes = [
    { path: '', redirectTo: '/inicio', pathMatch: 'full' },
    { path: 'inicio', component: MainMenuComponent },
    { path: 'productos', component: MainMenuComponent },
    { path: 'carrito', component: MainMenuComponent },
    { path: 'contacto', component: MainMenuComponent },
  ];
