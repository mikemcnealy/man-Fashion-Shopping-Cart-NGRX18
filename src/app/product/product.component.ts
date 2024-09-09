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
  @Input() id!:string;
  @Input()name!:string;
  @Input()category!:string;
  @Input()imageURL!:string;
  @Input()description!:string;
  @Input()price!:string;

  constructor() {}
  ngOnInit() {
  }
  addToCart(){
    alert(this.id)
  }
  showItem(){
    alert(this.id)
  }
}
