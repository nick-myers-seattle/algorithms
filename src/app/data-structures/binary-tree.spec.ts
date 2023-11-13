import { BinaryTree, Node } from './binary-tree';

describe('BinaryTree', () => {
  it('should create an instance', () => {
    expect(new BinaryTree()).toBeTruthy();
  });

  it('should create a binary tree with root node value of 5', () => {
    const tree = new BinaryTree(5);

    expect(tree.root?.value).toBe(5);
  });

  it('should create a binary tree with no value on root node', () => {
    const tree = new BinaryTree();

    expect(tree.root?.value).toBe(undefined);
  });

  describe('insertion', () => {
    it('should insert a new node', () => {
      const tree = new BinaryTree(12);

      tree.root.leftChild = new Node(9);

      expect(tree.root.leftChild.value).toBe(9);
    });

    it('should delete a node', () => {
      const tree = new BinaryTree(12);
      tree.root.leftChild = new Node(9);

      tree.root.leftChild = null;

      expect(tree.root.leftChild).toBe(null);
    });

    it('should delete a node that has a child', () => {
      const tree = new BinaryTree(12);
      tree.root.leftChild = new Node(9);
      tree.root.leftChild.leftChild = new Node(12);

      tree.root.leftChild = null;

      expect(tree.root.leftChild).toBe(null);
    });

    it('should insert several new nodes', () => {
      const tree = new BinaryTree(12);

      tree.root.leftChild = new Node(9);
      tree.root.leftChild.leftChild = new Node(7);
      tree.root.leftChild.rightChild = new Node(10);

      tree.root.rightChild = new Node(15);
      tree.root.rightChild.leftChild = new Node(14);
      tree.root.rightChild.rightChild = new Node(19);

      expect(tree.root.leftChild.value).toBe(9);
      expect(tree.root.leftChild.leftChild.value).toBe(7);
      expect(tree.root.leftChild.rightChild.value).toBe(10);

      expect(tree.root.rightChild.value).toBe(15);
      expect(tree.root.rightChild.leftChild.value).toBe(14);
      expect(tree.root.rightChild.rightChild.value).toBe(19);
    });
  });

  describe('depthFirstSearch()', () => {
    it('should find value at root node', () => {
      const tree = new BinaryTree(7);

      const node = tree.depthFirstSearch(7);

      expect(node?.value).toEqual(7);
    });

    it('should find value at leftChild of root node', () => {
      const tree = new BinaryTree(7);
      tree.root.leftChild = new Node(3);

      const node = tree.depthFirstSearch(3);

      expect(node?.value).toEqual(3);
    });

    it('should find value at rightChild of root node', () => {
      const tree = new BinaryTree(7);
      tree.root.leftChild = new Node(3);
      tree.root.rightChild = new Node(9);

      const node = tree.depthFirstSearch(9);

      expect(node?.value).toEqual(9);
    });

    it('should return null if value is not found', () => {
      const tree = new BinaryTree(7);
      tree.root.leftChild = new Node(3);
      tree.root.rightChild = new Node(9);

      const node = tree.depthFirstSearch(55);

      expect(node).toEqual(null);
    });

    it('should find value at leftChild of leftChild', () => {
      const tree = new BinaryTree(7);
      tree.root.leftChild = new Node(3);
      tree.root.rightChild = new Node(9);

      tree.root.leftChild.leftChild = new Node(1);

      const node = tree.depthFirstSearch(1);

      expect(node?.value).toEqual(1);
    });

    it('should find value at rightChild of rightChild', () => {
      const tree = new BinaryTree(7);
      tree.root.leftChild = new Node(3);
      tree.root.rightChild = new Node(9);

      tree.root.leftChild.leftChild = new Node(1);
      tree.root.rightChild.rightChild = new Node(14);

      const node = tree.depthFirstSearch(14);

      expect(node?.value).toEqual(14);
    });

    it('should find value at leftChild of leftChild of leftChild', () => {
      const tree = new BinaryTree(7);
      tree.root.leftChild = new Node(3);
      tree.root.rightChild = new Node(9);

      tree.root.leftChild.leftChild = new Node(1);
      tree.root.leftChild.leftChild.leftChild = new Node(75);

      const node = tree.depthFirstSearch(75);

      expect(node?.value).toEqual(75);
    });

    it('should find value at rightChild of rightChild of rightChild', () => {
      const tree = new BinaryTree(7);
      tree.root.leftChild = new Node(3);
      tree.root.rightChild = new Node(9);

      tree.root.leftChild.leftChild = new Node(1);
      tree.root.leftChild.leftChild.leftChild = new Node(75);

      tree.root.rightChild.rightChild = new Node(19);
      tree.root.rightChild.rightChild.rightChild = new Node(34);

      const node = tree.depthFirstSearch(34);

      expect(node?.value).toEqual(34);
    });
  });

  describe('breadthFirstSearch()', () => {
    it('should return null if not found', () => {
      const tree = new BinaryTree(3);

      const result = tree.breadthFirstSearch(4);

      expect(result).toBe(null);
    });

    it('should return the root node', () => {
      const tree = new BinaryTree(3);

      const result = tree.breadthFirstSearch(3);

      expect(result).toBe(tree.root);
    });

    it('should return the leftChild of root', () => {
      const tree = new BinaryTree(3);
      tree.root.leftChild = new Node(5);

      const result = tree.breadthFirstSearch(5);

      expect(result?.value).toBe(5);
    });

    it('should return the leftChild of leftChild of root', () => {
      const tree = new BinaryTree(3);
      tree.root.leftChild = new Node(5);
      tree.root.leftChild.leftChild = new Node(8);

      const result = tree.breadthFirstSearch(8);

      expect(result?.value).toBe(8)
    });

    it('should return the leftChild of leftChild of leftChild of root', () => {
      const tree = new BinaryTree(3);
      tree.root.leftChild = new Node(5);
      tree.root.leftChild.leftChild = new Node(8);
      tree.root.leftChild.leftChild.leftChild = new Node(22);

      const result = tree.breadthFirstSearch(22);

      expect(result?.value).toBe(22)
    });

    it('should return the rightChild of root', () => {
      const tree = new BinaryTree(3);
      tree.root.leftChild = new Node(5);
      tree.root.rightChild = new Node(11);

      const result = tree.breadthFirstSearch(11);

      expect(result?.value).toBe(11);
    });

    it('should return the rightChild of rightChild of root', () => {
      const tree = new BinaryTree(3);
      tree.root.leftChild = new Node(5);
      tree.root.rightChild = new Node(11);

      tree.root.rightChild.rightChild = new Node(15);

      const result = tree.breadthFirstSearch(15);

      expect(result?.value).toBe(15);
    });

    it('should return the rightChild of rightChild of rightChild of root', () => {
      const tree = new BinaryTree(3);
      tree.root.leftChild = new Node(5);
      tree.root.rightChild = new Node(11);

      tree.root.rightChild.rightChild = new Node(15);
      tree.root.rightChild.rightChild.rightChild = new Node(23);

      const result = tree.breadthFirstSearch(23);

      expect(result?.value).toBe(23);
    });

    it('should return root.leftChild.rightChild.leftChild', () => {
      const tree = new BinaryTree(3);
      tree.root.leftChild = new Node(5);
      tree.root.rightChild = new Node(11);

      tree.root.rightChild.rightChild = new Node(15);
      tree.root.rightChild.rightChild.rightChild = new Node(23);

      tree.root.leftChild.rightChild = new Node(123);
      tree.root.leftChild.rightChild.leftChild = new Node(456);

      const result = tree.breadthFirstSearch(456);

      expect(result?.value).toBe(456);
    });

    it('should return root.leftChild.rightChild.leftChild.rightChild', () => {
      const tree = new BinaryTree(3);
      tree.root.leftChild = new Node(5);
      tree.root.rightChild = new Node(11);

      tree.root.rightChild.rightChild = new Node(15);
      tree.root.rightChild.rightChild.rightChild = new Node(23);

      tree.root.leftChild.rightChild = new Node(123);
      tree.root.leftChild.rightChild.leftChild = new Node(456);
      tree.root.leftChild.rightChild.leftChild.rightChild = new Node(111);

      const result = tree.breadthFirstSearch(111);

      expect(result?.value).toBe(111);
    });
    it('should return null when not found in a larger tree', () => {
      const tree = new BinaryTree(3);
      tree.root.leftChild = new Node(5);
      tree.root.rightChild = new Node(11);

      tree.root.rightChild.rightChild = new Node(15);
      tree.root.rightChild.rightChild.rightChild = new Node(23);

      tree.root.leftChild.rightChild = new Node(123);
      tree.root.leftChild.rightChild.leftChild = new Node(456);
      tree.root.leftChild.rightChild.leftChild.rightChild = new Node(111);

      const result = tree.breadthFirstSearch(999);

      expect(result).toBe(null);
    });
  });
});
