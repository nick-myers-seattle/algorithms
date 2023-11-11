import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrimesService {
  constructor() { }

  // time-complexity:   O(n * sqrt(n))
  // space-complexity:  O(n)
  getNthPrime(n :number) :number {
    if (n <= 0) {
      throw new Error('n cannot be less than 1.');
    }
    if (!n) {
      throw new Error('n is not defined.');
    }
    if (n !== Math.floor(n)) {
      throw new Error('n must be an integer.');
    }
    if (n === 1) {
      return 2;
    }

    let primes = [2]; // populate primes array with the frist prime:  2

    for (let i=3; primes.length < n; i++) {  // this loop is O(n)
      for (let j=0; j<primes.length; j++) {  // this inner loop looks like another O(n), but breaks out early below at O(sqrt(n))
        if (i % primes[j] === 0) {
          break;  // go to next i
        }

        if (primes[j] >= Math.sqrt(i)) {  // breaks out of inner loop in O(sqrt(n))
          primes.push(i);
          break;  // go to next i
        }
      }
    }

    return primes[primes.length -1];
  }
}
