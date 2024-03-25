import { Component, Input } from '@angular/core';
import { Producto } from '../../models/Producto';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css',
  standalone: true,
  imports: [HttpClientModule]
})
export class ProductoComponent {
  
  @Input() producto: Producto | undefined;
  
  constructor() {
  }

}
