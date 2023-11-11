import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SortService {
  constructor() { }

  // time-complexity:   O(n^2)
  // space-complexity:  O(n)
  bubbleSort(arr :number[]): number[] {
    for (let i=0; i<arr.length -1; i++) {
      for (let j=0; j<arr.length -1; j++) {
        if (arr[j] > arr[j+1]) {
          const temp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = temp;
        }
      }
    }

    return arr;
  }

  // time-complexity:   O(nlog(n))
  // space-complexity:  O(nlog(n))
  mergeSort(arr :number[]) :number[] {
    // once the array is split into length of 1, it is considered to be sorted
    if (arr.length <= 1) {
      return arr;
    }

    // split the array in half
    let arr1 = arr.slice(0, arr.length/2);
    let arr2 = arr.slice(arr.length/2, arr.length);

    // call mergeSort
    arr1 = this.mergeSort(arr1);
    arr2 = this.mergeSort(arr2);

    // merge the sorted arrays
    let arr3 :number[] = []  // new sorted array
    let i = 0; // arr1 index
    let j = 0; // arr2 index

    while (i < arr1.length || j < arr2.length) {
      // if all items in arr1 have already been added
      if (i >= arr1.length) {
        arr3.push(arr2[j]);
        j++;
        continue;
      }

      // if all items in arr2 have already been added
      if (j >= arr2.length) {
        arr3.push(arr1[i]);
        i++;
        continue;
      }

      // compare arr1[i] and arr2[j] to find the lower value, and push
      if (arr1[i] <= arr2[j]) {
        arr3.push(arr1[i]);
        i++;
      } else if (arr2[j] <= arr1[i]) {
        arr3.push(arr2[j]);
        j++;
      }
    }
    return arr3;
  }
}
