import { Routes } from '@angular/router';
import { MainMenuComponent } from './Pages/main-menu/main-menu.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { CarritoPageComponent } from './Pages/carrito-page/carrito-page.component';

export const routes: Routes = [
    { path: '', redirectTo: '/productos', pathMatch: 'full' },
    { path: 'productos', component: MainMenuComponent },
    { path: 'carrito', component: CarritoPageComponent },
    { path: 'contacto', component: MainMenuComponent },
    { path: 'login', component: MainMenuComponent },
    { path: '**', redirectTo: '/productos', pathMatch: 'full'}
  ];
