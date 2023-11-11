import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }

  // time-complexity:   O(log(n))
  // space-complexity:  O(n)
  binarySearch(arr: Array<number>, query: number): number {
    let minIndex = 0;
    let maxIndex = arr.length -1;

    for (let i=0; i < Math.log2(arr.length) + 1; i++) {
      const currentIndex = Math.floor((minIndex + maxIndex)/2);
      const currentValue = arr[currentIndex]; 

      if (query === currentValue) {
        return currentIndex;
      } else if (query > currentValue) {
        minIndex = currentIndex + 1;
      } else if ( query < currentValue) {
        maxIndex = currentIndex - 1;
      }
    }

    return -1;
  }
}
