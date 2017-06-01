import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  onUpdate(userValues){
    this.search.checkCondition(userValues);
  }

  constructor(
    @Inject('search') private search
  ){}

}
