import { TestBed } from '@angular/core/testing';

import { SortService } from './sort.service';

describe('SortService', () => {
  let service: SortService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SortService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Bubble Sort', () => {
    it('should return an empty array when given an empty array', () => {
      const arr = service.bubbleSort([]);

      expect(arr).toEqual([]);
    });

    it('should return the same array, when give an array with just 1 item', () => {
      const arr = service.bubbleSort([123]);

      expect(arr).toEqual([123]);
    });

    it('should return a sorted array when passed an array with 2 items', () => {
      const arr = service.bubbleSort([5, 2]);

      expect(arr).toEqual([2, 5]);
    });

    it('should return the same array when passed an array with 2 items that is already sorted', () => {
      const arr = service.bubbleSort([2, 5]);

      expect(arr).toEqual([2,5]);
    });

    it('should sort a 3 item array', () => {
      const arr = service.bubbleSort([2, 1, 3]);

      expect(arr).toEqual([1, 2, 3]);
    });

    it('shoudl sort a 4 item array', () => {
      const arr = service.bubbleSort([3, 1, 4, 2]);

      expect(arr).toEqual([1, 2, 3, 4]);
    });

    it('should sort a 5 item array', () => {
      const arr = service.bubbleSort([4, 2, 5, 3, 1]);

      expect(arr).toEqual([1, 2, 3, 4, 5]);
    })

    it('should return a sorted array of single digit integers with no repeats', () => {
      const arr = service.bubbleSort([6, 2, 4, 0, 7, 1, 9, 3, 8, 5]);

      expect(arr).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    it('should return a sorted array of single digit integers with multiple repeats', () => {
      const arr = service.bubbleSort([9, 9, 9, 9, 6, 5, 2, 4, 5, 0, 7, 1, 9, 3, 8, 5, 5]);

      expect(arr).toEqual([0, 1, 2, 3, 4, 5, 5, 5, 5, 6, 7, 8, 9, 9, 9, 9, 9]);
    });

    it('should sort floating point numbers', () => {
      const arr = service.bubbleSort([5.5, 1.1, 7.7, 9.9, 4.4, 0.0, 3.3, 2.2, 8.8, 6.6]);

      expect(arr).toEqual([0.0, 1.1, 2.2, 3.3, 4.4, 5.5, 6.6, 7.7, 8.8, 9.9]);
    });
  });

  describe('mergeSort', () => {
    it('should return an empty array, when passed an empty array', () => {
      const arr = service.mergeSort([]);

      expect(arr).toEqual([]);
    });

    it('should return the array, when the array is only 1 item', () => {
      const arr = service.mergeSort([7]);

      expect(arr).toEqual([7]);
    });

    it('should sort an array of 2 items', () => {
      const arr = service.mergeSort([5, 3]);

      expect(arr).toEqual([3, 5]);
    });

    it('should sort an array of 3 items', () => {
      const arr = service.mergeSort([5, 3, 1]);

      expect(arr).toEqual([1, 3, 5]);
    });

    it('should sort an array of 4 items', () => {
      const arr = service.mergeSort([7, 5, 3, 1]);

      expect(arr).toEqual([1, 3, 5, 7]);
    });

    it('should sort an array of 5 items', () => {
      const arr = service.mergeSort([7, 5, 9, 3, 1]);

      expect(arr).toEqual([1, 3, 5, 7, 9]);
    });

    it('should sort an array of 10 items', () => {
      const arr = service.mergeSort([7, 5, 9, 3, 1, 8, 2, 0, 4, 6]);

      expect(arr).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    it('should sort an array of 20 items', () => {
      const arr = service.mergeSort([7, 5, 9, 3, 1, 8, 2, 0, 4, 6, 10, 12, 15, 19, 18, 16, 11, 13, 14, 17]);

      expect(arr).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
    });

    it('should sort an array with multiple duplicates', () => {
      const arr = service.mergeSort([7, 5, 7, 9, 3, 5, 1, 7, 8, 2, 5, 0, 7, 4, 6, 5]);

      expect(arr).toEqual([0, 1, 2, 3, 4, 5, 5, 5, 5, 6, 7, 7, 7, 7, 8, 9]);
    });

    it('should sort floating point numbers', () => {
      const arr = service.mergeSort([9.9, 4.4, 7.7, 1.1, 0.0, 2.2, 5.5, 3.3, 6.6, 8.8]);

      expect(arr).toEqual([0.0, 1.1, 2.2, 3.3, 4.4, 5.5, 6.6, 7.7, 8.8, 9.9])
    })

    it('should sort numbers that are less than 1', () => {
      const arr =  service.mergeSort([-1, -5, -9, 0, 3, -12, 7]);

      expect(arr).toEqual([-12, -9, -5, -1, 0, 3, 7]);
    })
  });
});
