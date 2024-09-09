import { Component, OnInit ,Input} from '@angular/core';
import {Iproduct} from '../store/interfaces/product';
import { HttpClient } from '@angular/common/http';
import {ProductComponent} from '../product/product.component'
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{
 protects:Iproduct[]=[]
 ngOnInit() {
  this.fetchDeails()
 }
 basURL ='http://localhost:3000/product';
 constructor(private http:HttpClient){}
 public fetchDeails(){
  this.http.get(this.basURL).subscribe((resp:any)=>{
    this.protects =resp
    //console.log(this.protects)
  }
  )
}
 }








