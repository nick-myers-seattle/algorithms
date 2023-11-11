import { TestBed } from '@angular/core/testing';

import { PrimesService } from './primes.service';

describe('PrimesService', () => {
  let service: PrimesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrimesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return 2 as the first prime.', () => {
    expect(service.getNthPrime(1)).toBe(2);
  });

  it('should return 3 as the second prime', () => {
    expect(service.getNthPrime(2)).toBe(3);
  });

  it('should return 5 as the third prime', () => {
    expect(service.getNthPrime(3)).toBe(5);
  });

  it('should return 104743 as the 10,001 prime', () => {
    expect(service.getNthPrime(10001)).toBe(104743);
  });

  it('should throw an error when n is 0', () => {
    let num = 0;
    expect(function() { service.getNthPrime(num) }).toThrowError('n cannot be less than 1.');
  });

  it('should throw an error when n is negative', () => {
    let num = -5;
    expect(function() { service.getNthPrime(num) }).toThrowError('n cannot be less than 1.');
  });

  it('should throw an error when n is float instead of int', () => {
    expect(function() { service.getNthPrime(12.234) }).toThrowError('n must be an integer.');
  })
});
