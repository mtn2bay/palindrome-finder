import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <input #userFirst type="text">
    <input #userSecond type="text">
    <button (click)="onClick(userFirst.value, userSecond.value)">Search</button>
  `,
  styles: []
})
export class SimpleFormComponent implements OnInit {

  onClick(userFirst, userSecond){
    console.log(userFirst, userSecond);
  }

  constructor() { }

  ngOnInit() {
  }

}
