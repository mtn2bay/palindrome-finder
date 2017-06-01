import { Injectable } from '@angular/core';

@Injectable()
export class SearchService {

  userValues = [];

  result = "";

  isPalindrome(n) {
    return n.toString().split('').reverse().join('') === n.toString();
  }

  checkCondition(userValues) {

    var workingNum,
      endPoint;

    if (+userValues[0] > +userValues[1]) {
      workingNum = +userValues[0];
      endPoint = +userValues[1];
    } else {
      workingNum = +userValues[1];
      endPoint = +userValues[0];
    }

    while (workingNum >= endPoint) {
      if (this.isPalindrome(workingNum)) {
        this.result = workingNum;
        break;
      } else {
        workingNum--;
      }
    }
  }


}
