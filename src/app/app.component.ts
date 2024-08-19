import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from '../app/layout/header/header.component';
import {CartComponent} from '../app/cart/cart.component';
import {FoolerComponent} from '../app/layout/fooler/fooler.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    HeaderComponent,
    CartComponent,
    FoolerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'man-Fashion-Shopping-Cart-NGRX18';
}
