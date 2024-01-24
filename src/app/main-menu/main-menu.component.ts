import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatToolbarRow } from '@angular/material/toolbar';
import {MatIcon} from '@angular/material/icon';
import { Producto } from '../../models/Producto';
import { ProductoComponent } from '../producto/producto.component';
import { ProductoService } from '../services/producto.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [CommonModule,RouterLink,MatToolbarModule,MatIcon,MatToolbarRow,ProductoComponent,HttpClientModule],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.css',
  providers: [ProductoService]
})
export class MainMenuComponent {

  constructor(private productoService: ProductoService) { }

    menuItems: MenuItem[] = [
      { label: 'Inicio', link: '/' },
      { label: 'Productos', link: '/productos' },
      { label: 'Carrito', link: '/carrito' },
      { label: 'Contacto', link: '/contacto' },
    ];

    productoPrueba = new Producto(1, 'Example Product', 10, 5, 'Example description', 'https://grimoldimediamanager.test.ingecloud.com/MediaFiles/Grimoldi/2021/10_2/0/108/78/7097952.jpg');

    productList: Producto[] = [];

    ngOnInit() {
      for (let index = 0; index < 20; index++) {
        this.productList.push(this.productoPrueba);
      }

      this.productoService.obtenerProductos().subscribe((data: any[]) => {
        this.productList = data;
      });
      }
    }

  interface MenuItem {
    label: string;
    link: string;
}


