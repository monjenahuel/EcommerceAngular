import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIcon} from '@angular/material/icon';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [MatToolbarModule,RouterLink,MatIcon,CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  
  menuItems: MenuItem[] = [
    { label: 'Productos', link: '/productos' },
    { label: 'Carrito', link: '/carrito' },
    { label: 'Contacto', link: '/contacto' },
    { label: 'Login', link: '/login' },
  ]
}

interface MenuItem {
  label: string;
  link: string;
}



