import { Component, viewChild, ElementRef, Output } from '@angular/core';

@Component({
  //@viewChild('myDiv') anyName!:ElementRef;
  selector: 'app-test-d',
  standalone: true,
  imports: [],
  templateUrl: './test-d.component.html',
  styleUrl: './test-d.component.css',
})
export class TestDComponent {
  //@viewChild() anyName?:ElementRef
  constructor() {}

  ngOnInit(): void {}
}
