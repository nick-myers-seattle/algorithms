import { BinarySearchTree } from './binary-search-tree';

describe('BinarySearchTree', () => {
  it('should create an instance', () => {
    expect(new BinarySearchTree()).toBeTruthy();
  });

  it('should inhert constructor and root node from BinaryTree', () => {
    const tree = new BinarySearchTree(4);

    expect(tree.root.value).toBe(4);
  });

  it('should inhert breadthFirstSearch() function from BinaryTree', () => {
    const tree = new BinarySearchTree(4);

    const result = tree.breadthFirstSearch(4);

    expect(result?.value).toBe(4);
  });

  it('should inhert depthFirstSearch() function from BinaryTree', () => {
    const tree = new BinarySearchTree(4);

    const result = tree.depthFirstSearch(4);

    expect(result?.value).toBe(4);
  });

  describe('insert()', () => {
    it('should insert smaller number to left of root', () => {
      const tree = new BinarySearchTree(10);

      tree.insert(5);
  
      expect(tree.root.leftChild?.value).toBe(5);
    });

    it('should insert larger number to right of root', () => {
      const tree = new BinarySearchTree(10);

      tree.insert(5);
      tree.insert(15);
  
      expect(tree.root.leftChild?.value).toBe(5);
      expect(tree.root.rightChild?.value).toBe(15);
    });

    it('should be able to chain insert()', () => {
      const tree = new BinarySearchTree(10);

      tree.insert(5).insert(15);
  
      expect(tree.root.leftChild?.value).toBe(5);
      expect(tree.root.rightChild?.value).toBe(15);
    });

    it('should insert smallest number as root.leftChild.leftChild', () => {
      const tree = new BinarySearchTree(10);
      tree.insert(5).insert(15);

      tree.insert(3);
  
      expect(tree.root.leftChild?.value).toBe(5);
      expect(tree.root.rightChild?.value).toBe(15);
      expect(tree.root.leftChild?.leftChild?.value).toBe(3);
    });

    it('should insert largest number as root.rightChild.rightChild', () => {
      const tree = new BinarySearchTree(10);
      tree.insert(5).insert(15).insert(3);

      tree.insert(20)
  
      expect(tree.root.leftChild?.value).toBe(5);
      expect(tree.root.rightChild?.value).toBe(15);
      expect(tree.root.leftChild?.leftChild?.value).toBe(3);
      expect(tree.root.rightChild?.rightChild?.value).toBe(20);
    });

    it('should insert new largest number as root.rightChild.rightChild.rightChild', () => {
      const tree = new BinarySearchTree(10);
      tree.insert(5).insert(15).insert(3).insert(20);

      tree.insert(25);
  
      expect(tree.root.leftChild?.value).toBe(5);
      expect(tree.root.rightChild?.value).toBe(15);
      expect(tree.root.leftChild?.leftChild?.value).toBe(3);
      expect(tree.root.rightChild?.rightChild?.value).toBe(20);
      expect(tree.root.rightChild?.rightChild?.rightChild?.value).toBe(25);
    });

    it('should insert several more numbers', () => {
      const tree = new BinarySearchTree(10);
      tree.insert(5).insert(15).insert(3).insert(20).insert(25);
  
      tree.insert(17).insert(12).insert(7).insert(11).insert(18);

      expect(tree.root.leftChild?.value).toBe(5);
      expect(tree.root.rightChild?.value).toBe(15);
      expect(tree.root.leftChild?.leftChild?.value).toBe(3);
      expect(tree.root.rightChild?.rightChild?.value).toBe(20);
      expect(tree.root.rightChild?.rightChild?.rightChild?.value).toBe(25);
      expect(tree.root.rightChild?.rightChild?.leftChild?.value).toBe(17);
      expect(tree.root.rightChild?.leftChild?.value).toBe(12);
      expect(tree.root.leftChild?.rightChild?.value).toBe(7);
      expect(tree.root.rightChild?.leftChild?.leftChild?.value).toBe(11);
      expect(tree.root.rightChild?.rightChild?.leftChild?.rightChild?.value).toBe(18);
    });

    it('should insert a negative number', () => {
      const tree = new BinarySearchTree(10);

      tree.insert(-1);

      expect(tree.root.leftChild?.value).toBe(-1);
    });

    it('should insert 0', () => {
      const tree = new BinarySearchTree(10);

      tree.insert(0);

      expect(tree.root.leftChild?.value).toBe(0);
    });

    it('should insert a float', () => {
      const tree = new BinarySearchTree(10);

      tree.insert(33.333);

      expect(tree.root.rightChild?.value).toBe(33.333);
    });
  });

  describe('find()', () => {
    it('should return null when not found', () => {
      const tree = new BinarySearchTree(30);

      const result = tree.find(12);

      expect(result).toBe(null)
    });

    it('should find the root node', () => {
      const tree = new BinarySearchTree(30);

      const result = tree.find(30);

      expect(result?.value).toBe(30)
    });

    it('should find root.leftChild', () => {
      const tree = new BinarySearchTree(30);
      tree.insert(12);

      const result = tree.find(12);

      expect(result?.value).toBe(12)
    });

    it('should find 17', () => {
      const tree = new BinarySearchTree(10);
      tree.insert(5).insert(15).insert(3).insert(20).insert(25);
      tree.insert(17).insert(12).insert(7).insert(11).insert(18);

      const result = tree.find(17);

      expect(result?.value).toBe(17)
    });

    it('should find all values', () => {
      const tree = new BinarySearchTree(10);
      tree.insert(5).insert(15).insert(3).insert(20).insert(25);
      tree.insert(17).insert(12).insert(7).insert(11).insert(18);

      let result = tree.find(10);
      expect(result?.value).toBe(10);

      result = tree.find(5);
      expect(result?.value).toBe(5);

      result = tree.find(15);
      expect(result?.value).toBe(15);

      result = tree.find(3);
      expect(result?.value).toBe(3);

      result = tree.find(20);
      expect(result?.value).toBe(20);

      result = tree.find(25);
      expect(result?.value).toBe(25);

      result = tree.find(17);
      expect(result?.value).toBe(17);

      result = tree.find(12);
      expect(result?.value).toBe(12);

      result = tree.find(7);
      expect(result?.value).toBe(7);

      result = tree.find(11);
      expect(result?.value).toBe(11);

      result = tree.find(18);
      expect(result?.value).toBe(18);

      result = tree.find(1234);
      expect(result).toBe(null);
    });
  });
});
