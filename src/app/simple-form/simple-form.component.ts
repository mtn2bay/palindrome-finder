import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `

    <div class="row">
      <div class="col-xs-4">
        <input #userFirst type="text" class="form-control input-sm" placeholder="Value 1">
        <input #userSecond type="text" class="form-control input-sm" placeholder="Value 2">
        <button class="btn btn-default btn-xs" (click)="update.emit([userFirst.value, userSecond.value])">Search</button>
      </div>
      <div class="col-xs-8">
        <div class="panel panel-default">
          <div class="panel-body">
            {{search.result}}
          </div>
        </div>
      </div>
    </div>

  `,
  styles: [`
    input{margin-bottom: 10px;}
    .panel{
      min-height: 78px;
      min-width: 200px;
    }
    .panel-body{
      padding: 0 10px;
      font-size: 55px;
      word-wrap: break-word;
    }
  `]
})
export class SimpleFormComponent implements OnInit {

  @Output() update = new EventEmitter();

  constructor(
    @Inject('search') private search
  ){}

  ngOnInit() {
  }

}
