import { LinkedList } from './linked-list';

describe('LinkedList', () => {
  it('should create an instance', () => {
    expect(new LinkedList(null)).toBeTruthy();
  });

  it('should create a LinkedList with a root node value', () => {
    const list = new LinkedList(7);

    expect(list.root?.value).toEqual(7);
  });

  describe('getRoot()', () => {
    it('should return root node', () => {
      const list = new LinkedList(7);
  
      const root = list.getRoot();
  
      expect(root?.value).toEqual(7);
    });
  
    it('should return null when root value is null', () => {
      const list = new LinkedList(null);
  
      const root = list.getRoot();
  
      expect(root?.value).toEqual(null);
    });
  });

  describe('insertAtBeginning()', () => {
    it('should insert a new root node in list', () => {
      const list = new LinkedList(7);
  
      list.insertAtBeginning(5);
  
      expect(list.getRoot()?.value).toBe(5);
      expect(list.getRoot()?.next?.value).toEqual(7);
    });

    it('should insert a new root node in a longer list', () => {
      const list = new LinkedList(7);
  
      list.insertAtBeginning(5);
      list.insertAtBeginning(12);
      list.insertAtBeginning(34);
  
      expect(list.getRoot()?.value).toBe(34);
    });

    it('should insert a new root node with chained calls', () => {
      const list = new LinkedList(7);
  
      list.insertAtBeginning(5).insertAtBeginning(12).insertAtBeginning(34);
  
      expect(list.getRoot()?.value).toBe(34);
    });
  });

  describe('insertAtEnd()', () => {
    it('should insert new node at end', () => {
      const list = new LinkedList(7);
      list.insertAtEnd(5);

      expect(list.root?.value).toEqual(7);
      expect(list.root?.next?.value).toBe(5);
      expect(list.root?.next?.next).toEqual(null);
    });

    it('should insert a new end node in a longer list', () => {
      const list = new LinkedList(7);
  
      list.insertAtEnd(5);
      list.insertAtEnd(12);
      list.insertAtEnd(34);
  
      expect(list.getRoot()?.next?.next?.next?.value).toBe(34);
    });

    it('should insert a new end node with chained calls', () => {
      const list = new LinkedList(7);
  
      list.insertAtEnd(5).insertAtEnd(12).insertAtEnd(34);
  
      expect(list.getRoot()?.next?.next?.next?.value).toBe(34);
    });
  });

  describe('insert()', () => {
    it('should throw an error if position is negative', () => {
      const list = new LinkedList('hello');
      
      expect(function() {list.insert('world', -2)}).toThrowError('Position cannot be negative.');
    });

    it('should throw an error if position is not an integer', () => {
      const list = new LinkedList('Canada');

      expect(function() { list.insert("Mexico", 2.2495) }).toThrowError('Position must be an integer.');
    });

    it('should insert a value in the middle', () => {
      const list = new LinkedList(1);
      list.insertAtEnd(2).insertAtEnd(3).insertAtEnd(4);

      list.insert('hello', 2);

      const arr = list.iterate();
      expect(arr).toEqual([1, 2, 'hello', 3, 4]);
    });

    it('should insert a value at the end', () => {
      const list = new LinkedList(1);
      list.insertAtEnd(2).insertAtEnd(3).insertAtEnd(4);

      list.insert('hello', 4);

      const arr = list.iterate();
      expect(arr).toEqual([1, 2, 3, 4, 'hello']);
    });

    it('should insert a value at the beginning', () => {
      const list = new LinkedList(1);
      list.insertAtEnd(2).insertAtEnd(3).insertAtEnd(4);

      list.insert('hello', 0);

      const arr = list.iterate();
      expect(arr).toEqual(['hello', 1, 2, 3, 4]);
    });
  })

  describe('iterate()', () => {
    it('should return an array of items', () => {
      const list = new LinkedList(1);
      list.insertAtEnd(2).insertAtEnd(3).insertAtEnd(4);

      const arr = list.iterate();
      expect(arr).toEqual([1, 2, 3, 4]);
    });

    it('should double values in Linked List, and return in array', () => {
      const list = new LinkedList(1);
      list.insertAtEnd(2).insertAtEnd(3).insertAtEnd(4);

      const double = function(val :any) {
        return val * 2;
      }

      const arr = list.iterate(double);
      expect(arr).toEqual([2, 4, 6, 8]);

      expect(list.root.value).toBe(2);
      expect(list.root.next.value).toBe(4);
      expect(list.root.next.next.value).toBe(6);
      expect(list.root.next.next.next.value).toBe(8);
    });
  });

  describe('deleteByIndex()', () => {
    it('should remove the root node at index 0', () => {
      const list = new LinkedList(1);
      list.insertAtEnd(2).insertAtEnd(3).insertAtEnd(4);

      const result = list.deleteByIndex(0);

      expect(list.iterate()).toEqual([2, 3, 4]);
      expect(result).toBe(1);
    });

    it('should remove a node in the middle', () => {
      const list = new LinkedList(1);
      list.insertAtEnd(2).insertAtEnd(3).insertAtEnd(4);

      const result = list.deleteByIndex(2);

      expect(list.iterate()).toEqual([1, 2, 4]);
      expect(result).toBe(3);
    });

    it('should remove a node at the end', () => {
      const list = new LinkedList(1);
      list.insertAtEnd(2).insertAtEnd(3).insertAtEnd(4);

      const result = list.deleteByIndex(3);

      expect(list.iterate()).toEqual([1, 2, 3]);
      expect(result).toBe(4);
    });

    it('should throw an error if index argument is negative', () => {
      const list = new LinkedList(1);
      list.insertAtEnd(2).insertAtEnd(3).insertAtEnd(4);

      expect(function() { list.deleteByIndex(-1) }).toThrowError('index cannot be negative.');
    });

    it('should throw an error if index is float instead of int', () => {
      const list = new LinkedList(1);
      list.insertAtEnd(2).insertAtEnd(3).insertAtEnd(4);

      expect(function() { list.deleteByIndex(3.723) }).toThrowError('index must be an integer.');
    });

    it('should throw an error if index is larger than the Linked List', () => {
      const list = new LinkedList(1);
      list.insertAtEnd(2).insertAtEnd(3).insertAtEnd(4);

      expect(function() { list.deleteByIndex(7) }).toThrowError('index is larger than the Linked list.');
    });
  });

  describe('deleteByValue()', () => {
    it('should remove the root node', () => {
      const list = new LinkedList(1);
      list.insertAtEnd(2).insertAtEnd(3).insertAtEnd(4);

      const result = list.deleteByValue(1);

      expect(list.iterate()).toEqual([2, 3, 4]);
      expect(result).toBe(true);
    });


    it('should remove the second node', () => {
      const list = new LinkedList(1);
      list.insertAtEnd(2).insertAtEnd(3).insertAtEnd(4);

      const result = list.deleteByValue(2);

      expect(list.iterate()).toEqual([1, 3, 4]);
      expect(result).toBe(true);
    });

    it('should remove a node in the middle', () => {
      const list = new LinkedList(1);
      list.insertAtEnd(2).insertAtEnd(3).insertAtEnd(4);

      const result = list.deleteByValue(3);

      expect(list.iterate()).toEqual([1, 2, 4]);
      expect(result).toBe(true);
    });

    it('should remove a node at the end', () => {
      const list = new LinkedList(1);
      list.insertAtEnd(2).insertAtEnd(3).insertAtEnd(4);

      const result = list.deleteByValue(4);

      expect(list.iterate()).toEqual([1, 2, 3]);
      expect(result).toBe(true);
    });

    it('should return false when there is no matching value to remove', () => {
      const list = new LinkedList(1);
      list.insertAtEnd(2).insertAtEnd(3).insertAtEnd(4);

      const result = list.deleteByValue(7);

      expect(list.iterate()).toEqual([1, 2, 3, 4]);
      expect(result).toBe(false);
    });
  });

  describe('getIndex()', () => {
    it('should return the root index', () => {
      const list = new LinkedList(1);
      list.insertAtEnd(2).insertAtEnd(3).insertAtEnd(4);

      const index = list.getIndex(1);

      expect(index).toBe(0);
    });

    it('should return the index of a given value', () => {
      const list = new LinkedList(1);
      list.insertAtEnd(2).insertAtEnd(3).insertAtEnd(4);

      const index = list.getIndex(3);

      expect(index).toBe(2);
    });

    it('should return the index of the end node', () => {
      const list = new LinkedList(1);
      list.insertAtEnd(2).insertAtEnd(3).insertAtEnd(4);

      const index = list.getIndex(4);

      expect(index).toBe(3);
    });

    it('should return -1 if the value is not in the list', () => {
      const list = new LinkedList(1);
      list.insertAtEnd(2).insertAtEnd(3).insertAtEnd(4);

      const index = list.getIndex(7);

      expect(index).toBe(-1);
    });
  });

  describe('getValue()', () => {
    it('should return the root value', () => {
      const list = new LinkedList(1);
      list.insertAtEnd(2).insertAtEnd(3).insertAtEnd(4);

      const val = list.getValue(0);

      expect(val).toBe(1);
    });

    it('should return the value at a given index', () => {
      const list = new LinkedList(1);
      list.insertAtEnd(2).insertAtEnd(3).insertAtEnd(4);

      const val = list.getValue(2);

      expect(val).toBe(3);
    });

    it('should return the value of the end node', () => {
      const list = new LinkedList(1);
      list.insertAtEnd(2).insertAtEnd(3).insertAtEnd(4);

      const val = list.getValue(3);

      expect(val).toBe(4);
    });

    it('should throw an error if index is outside the list', () => {
      const list = new LinkedList(1);
      list.insertAtEnd(2).insertAtEnd(3).insertAtEnd(4);

      expect(function() { list.getValue(7) }).toThrowError('index must be valid');
    });
  });
});

