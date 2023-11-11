import { TestBed } from '@angular/core/testing';

import { SearchService } from './search.service';

describe('SearchService', () => {
  let service: SearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('array with an even number of items', () => {
    let myArr : number[];

    beforeEach(() => {
      myArr = [3, 5, 9, 12, 34, 56, 78, 90, 123, 345, 567, 789, 889, 900];
    });

    it('should find the value at arr[0]', () => {
      const index = service.binarySearch(myArr, 3);

      expect(index).toBe(0);
    });

    it('should find the value at arr[1]', () => {
      const index = service.binarySearch(myArr, 5);

      expect(index).toBe(1);
    });

    it('should find the value at arr[2]', () => {
      const index = service.binarySearch(myArr, 9);

      expect(index).toBe(2);
    });

    it('should find the value at arr[3]', () => {
      const index = service.binarySearch(myArr, 12);

      expect(index).toBe(3);
    });
    
    it('should find the value at arr[4]', () => {
      const index = service.binarySearch(myArr, 34);

      expect(index).toBe(4);
    });
    
    it('should find the value at arr[5]', () => {
      const index = service.binarySearch(myArr, 56);

      expect(index).toBe(5);
    });
    
    it('should find the value at arr[6]', () => {
      const index = service.binarySearch(myArr, 78);

      expect(index).toBe(6);
    });
    
    it('should find the value at arr[7]', () => {
      const index = service.binarySearch(myArr, 90);

      expect(index).toBe(7);
    });
    
    it('should find the value at arr[8]', () => {
      const index = service.binarySearch(myArr, 123);

      expect(index).toBe(8);
    });
    
    it('should find the value at arr[9]', () => {
      const index = service.binarySearch(myArr, 345);

      expect(index).toBe(9);
    });
    
    it('should find the value at arr[10]', () => {
      const index = service.binarySearch(myArr, 567);

      expect(index).toBe(10);
    });
    
    it('should find the value at arr[11]', () => {
      const index = service.binarySearch(myArr, 789);

      expect(index).toBe(11);
    });
    
    it('should find the value at arr[12]', () => {
      const index = service.binarySearch(myArr, 889);

      expect(index).toBe(12);
    });
    
    it('should find the value at arr[13]', () => {
      const index = service.binarySearch(myArr, 900);

      expect(index).toBe(13);
    });
    
    it('should return -1 when value is not found', () => {
      const index = service.binarySearch(myArr, 1000);

      expect(index).toBe(-1);
    });
  });


  describe('array with an odd number of items', () => {
    let myArr: number[];

    beforeEach(() => {
      myArr = [3, 5, 9, 12, 34, 56, 78, 90, 123, 345, 567, 789, 889, 900, 999];
    })

    it('should find the value at arr[0]', () => {

      const index = service.binarySearch(myArr, 3);

      expect(index).toBe(0);
    });

    it('should find the value at arr[1]', () => {
      const index = service.binarySearch(myArr, 5);

      expect(index).toBe(1);
    });

    it('should find the value at arr[2]', () => {
      const index = service.binarySearch(myArr, 9);

      expect(index).toBe(2);
    });

    it('should find the value at arr[3]', () => {
      const index = service.binarySearch(myArr, 12);

      expect(index).toBe(3);
    });
    
    it('should find the value at arr[4]', () => {
      const index = service.binarySearch(myArr, 34);

      expect(index).toBe(4);
    });
    
    it('should find the value at arr[5]', () => {
      const index = service.binarySearch(myArr, 56);

      expect(index).toBe(5);
    });
    
    it('should find the value at arr[6]', () => {
      const index = service.binarySearch(myArr, 78);

      expect(index).toBe(6);
    });
    
    it('should find the value at arr[7]', () => {
      const index = service.binarySearch(myArr, 90);

      expect(index).toBe(7);
    });
    
    it('should find the value at arr[8]', () => {
      const index = service.binarySearch(myArr, 123);

      expect(index).toBe(8);
    });
    
    it('should find the value at arr[9]', () => {
      const index = service.binarySearch(myArr, 345);

      expect(index).toBe(9);
    });
    
    it('should find the value at arr[10]', () => {
      const index = service.binarySearch(myArr, 567);

      expect(index).toBe(10);
    });
    
    it('should find the value at arr[11]', () => {
      const index = service.binarySearch(myArr, 789);

      expect(index).toBe(11);
    });
    
    it('should find the value at arr[12]', () => {
      const index = service.binarySearch(myArr, 889);

      expect(index).toBe(12);
    });
    
    it('should find the value at arr[13]', () => {
      const index = service.binarySearch(myArr, 900);

      expect(index).toBe(13);
    });
    
    it('should find the value at arr[14]', () => {
      const index = service.binarySearch(myArr, 999);

      expect(index).toBe(14);
    });
    
    it('should return -1 when value is not found', () => {
      const index = service.binarySearch(myArr, 1000);

      expect(index).toBe(-1);
    });
  });

  describe('short and empty arrays', ()=> {
    it('should return -1 for an empty array', () => {
      const index = service.binarySearch([], 1056);

      expect(index).toBe(-1);
    });

    it('should return arr[0] for a 1-item array', () => {
      const index = service.binarySearch([1056], 1056);

      expect(index).toBe(0);
    });


    it('should return array[0] for a 2-item array', () => {
      const index = service.binarySearch([234, 567], 234)

      expect(index).toBe(0);
    });

    it('should return arr[1] for a 2-item array', () => {
      const index = service.binarySearch([234, 567], 567);

      expect(index).toBe(1);
    });


    it('should return array[0] for a 3-item array', () => {
      const index = service.binarySearch([234, 567, 893], 234)

      expect(index).toBe(0);
    });

    it('should return arr[1] for a 3-item array', () => {
      const index = service.binarySearch([234, 567, 893], 567);

      expect(index).toBe(1);
    });

    it('should return arr[2] for a 3-item array', () => {
      const index = service.binarySearch([234, 567, 893], 893);

      expect(index).toBe(2);
    });


    it('should return array[0] for a 4-item array', () => {
      const index = service.binarySearch([234, 567, 893, 999], 234)

      expect(index).toBe(0);
    });

    it('should return arr[1] for a 4-item array', () => {
      const index = service.binarySearch([234, 567, 893, 999], 567);

      expect(index).toBe(1);
    });

    it('should return arr[2] for a 4-item array', () => {
      const index = service.binarySearch([234, 567, 893, 999], 893);

      expect(index).toBe(2);
    });

    it('should return arr[3] for a 4-item array', () => {
      const index = service.binarySearch([234, 567, 893, 999], 999);

      expect(index).toBe(3);
    });
  });
});
