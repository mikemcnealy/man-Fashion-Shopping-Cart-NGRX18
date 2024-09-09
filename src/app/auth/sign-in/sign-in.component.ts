import { Component, OnInit, Input ,OnChanges,DoCheck} from '@angular/core';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
})
export class SignInComponent implements OnInit, OnChanges,DoCheck{
  @Input() login!: boolean;
  showLogin!: boolean;

  ngOnInit() {
    //alert(this.login)
    this.showLogin = this.login;

  }
  ngOnChanges(){
   // alert('you call')
  }
  ngDoCheck(){
    //alert('you call ngDoCheck')
    //this.showLogin =this.login
  }


  close() {

    this.showLogin = false;
  }

}
