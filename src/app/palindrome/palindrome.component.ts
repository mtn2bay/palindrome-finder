import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-palindrome',
  templateUrl: './palindrome.component.html',
  styleUrls: ['./palindrome.component.css']
})
export class PalindromeComponent implements OnInit {

  onUpdate(userValues){
    this.search.isPalindrome(userValues);
  }

  constructor(
    @Inject('search') private search
  ){}

  ngOnInit() {
  }

}
