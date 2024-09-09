import { Component, OnInit } from '@angular/core';
import {animate,state,style,transition,trigger} from'@angular/animations';
import { RouterOutlet } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './layout/header/header.component';
import { CartComponent } from './cart/cart.component';
import { FoolerComponent } from './layout/fooler/fooler.component';
import { MatDialog } from '@angular/material/dialog';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { inject } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { Iproduct } from '../app/store/interfaces/product';
import {CartDetailComponent} from './cart-detail/cart-detail.component';
import { TestDComponent } from './test-d/test-d.component';
//import {LoginComponent} from './auth/login/login.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    CartComponent,
    ProductComponent,
    MatButtonModule,
    MatDialogModule,
    FoolerComponent,
    ProductListComponent,
    SignInComponent,
    CartDetailComponent,
    TestDComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'man-Fashion-Shopping-Cart-NGRX18';
  basURL = 'http://localhost:3000/product';
  //http =inject(HttpClient);
  protects: [] = [];
  login!:boolean;
  Rigister!:boolean;
  //cartDetail !:boolean;
  cartDetail=true;
  FordotPassword!:boolean;
  DialogOverlay!:boolean;


  //Dialog = false;
  constructor(private matDialog: MatDialog, private http: HttpClient) {}
  resetDIV(){
    this.login = false;
    this.Rigister = false;
    this.DialogOverlay = false;
  }
  public fetchDeails() {
    this.http.get(this.basURL).subscribe((resp: any) => {
      this.protects = resp;
      console.log(this.protects);
    });
  }
  ngOnInit() {
    this.fetchDeails();
    this.resetDIV();
    this.cartDetail =true;
    this.DialogOverlay =false
    this.cartDetail =true;
    ;

  }
  openDialog(type: string) {
    if (type == 'Sign In') {
      //alert(this.login)
        this.login =true
      //this.matDialog.open(LoginComponent)
    } else if (type == 'Register') {
      if(!this.DialogOverlay){}
      this.matDialog.open(RegisterComponent);
    } else if (type == 'Forgot password') {
      if(!this.DialogOverlay){}
      this.login =true
      this.matDialog.open(ForgotPasswordComponent);
    }
  }
}
