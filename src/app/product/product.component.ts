import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Iproduct } from '../../app/store/interfaces/product';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
  @Input() product!: Iproduct;
  constructor() {}
  ngOnInit() {}

  addToCart(product: Iproduct) {}
}
