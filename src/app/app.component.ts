import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  onUpdate(userValues){
    console.log(userValues);
  }

  constructor(
    @Inject('search') private search
  ){}

}
