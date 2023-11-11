import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrimesService {
  constructor() { }

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

    for (let i=3; primes.length < n; i++) {
      for (let j=0; j<primes.length; j++) {
        if (i % primes[j] === 0) {
          break;  // go to next i
        }

        if (j === primes.length -1) {
          console.log('i is:  ' + i)
          primes.push(i);
          break;
        }
      }
    }

    return primes[primes.length -1];
  }
}
