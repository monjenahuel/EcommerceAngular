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
import { User } from '../../models/User';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [CommonModule,RouterLink,MatToolbarModule,MatIcon,MatToolbarRow,ProductoComponent,HttpClientModule],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.css',
  providers: [ProductoService,UserService]
})
export class MainMenuComponent {

  constructor(
    private productoService: ProductoService,
    private userService: UserService) { }

    productList: Producto[] = [];
    userLogin: User = new User();

    ngOnInit() {

      this.productoService.obtenerProductos().subscribe((data: any[]) => {
        this.productList = data;
      });

      this.userService.obtenerUsuario7().subscribe((data: any) => {
        this.userLogin = data;

      });

      console.log(this.userLogin)
    }

    
    
  }
