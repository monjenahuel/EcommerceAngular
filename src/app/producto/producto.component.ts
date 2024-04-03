import { Component, Input } from '@angular/core';
import { Producto } from '../../models/Producto';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe, CurrencyPipe, SlicePipe } from '@angular/common';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css',
  standalone: true,
  imports: [HttpClientModule,DatePipe,CurrencyPipe,SlicePipe,NgIf]
})
export class ProductoComponent {
  
  @Input() producto: Producto | undefined;
 
  
  constructor() {
  }

}
