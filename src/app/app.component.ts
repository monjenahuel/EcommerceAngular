import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CommonModule } from '@angular/common';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MainMenuComponent,HttpClientModule,NavBarComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  booleanTrue: boolean = true;
  booleanFalse: boolean = false;

  constructor(private router: Router) { }

  getCurrentRoute() {
    return this.router.url;
  }
}
