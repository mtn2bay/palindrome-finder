import { Injectable } from '@angular/core';

@Injectable()
export class SearchService {

  result = '';

  isPalindrome(userValues) {

    var current, endPoint;

    if (+userValues[0] > +userValues[1]) {
      current = +userValues[0];
      endPoint = +userValues[1];
    } else {
      current = +userValues[1];
      endPoint = +userValues[0];
    }

    while (current >= endPoint) {
      if (this.getRev(current) === current) {
        this.result = current;
        break;
      } else {
        current--;
      }
    }
  }

  getRev(val) {
    var original = val;
    var reversed = 0;
    var lastDigit;

    while (original > 0){
      lastDigit = original % 10;
      original = Math.floor(original / 10);
      reversed = reversed * 10 + lastDigit;
    }
    return reversed;
  }
}
