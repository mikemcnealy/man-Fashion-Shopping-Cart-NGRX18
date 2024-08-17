import { Component, OnInit } from '@angular/core';
import {Iproduct} from '../store/interfaces/product'
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{
 protects=[]
 //Iproduct
 ngOnInit() {
  (opts: Iproduct)=>{
    opts.ID =0
    opts.category=""
    opts.name=""
    opts.imageURL=""
    opts.description=""
    opts.price=0
   }
   this.protects.push()

   }
 //const p = this.protects.push();
 }








