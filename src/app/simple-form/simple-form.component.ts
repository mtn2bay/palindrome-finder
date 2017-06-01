import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <input #userFirst type="text">
    <input #userSecond type="text">
    <button (click)="update.emit([userFirst.value, userSecond.value])">Search</button>
  `,
  styles: []
})
export class SimpleFormComponent implements OnInit {

  @Output() update = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
