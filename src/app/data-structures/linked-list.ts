class Node {
  value: any;
  next: any;
  
  constructor(val :any, node :Node | null) {
    this.value = val;
    this.next = node;
  }
}

export class LinkedList {
  root: Node;

  constructor(val: any) {
    const node = new Node(val, null);
    this.root = node;
  }

  // time-complexity:   O(1)
  // space-complexity:  O(1)
  getRoot() :Node | null {
    return this.root;
  }

  // time-complexity:   O(1)
  // space-complexity:  O(1)
  insertAtBeginning(val :any) :LinkedList {
    this.root = new Node(val, this.root);

    return this;
  }

  // time-complexity:   O(n)
  // space-complexity:  O(1)
  insertAtEnd(val :any) :LinkedList {
    let currentNode = this.root;
    while(currentNode.next !== null) {
      currentNode = currentNode.next;
    }

    const newNode = new Node(val, null);
    currentNode.next = newNode;

    return this;
  }

  // time-complexity:   O(n)
  // space-complexity:  O(1)
  insert(val: any, position: number) :LinkedList {
    if (position < 0) {
      throw new Error('Position cannot be negative.');
    }

    if (position !== Math.floor(position)) {
      throw new Error('Position must be an integer.');
    }

    if (position === 0) {
      this.insertAtBeginning(val);

      return this;
    }

    let count = 0;
    let currentNode = this.root;
    while(count < position - 1) {
      currentNode = currentNode.next;
      count++;
    }

    const newNode = new Node(val, currentNode.next);
    currentNode.next = newNode;

    return this;
  }

  // time-complexity O(n)
  // space-complexity O(1)
  deleteByIndex(index: number) :any {
    if (index < 0) {
      throw new Error('index cannot be negative.');
    }

    if (index !== Math.floor(index)) {
      throw new Error('index must be an integer.')
    }

    let currentNode = this.root;

    if (index === 0) {
      this.root = this.root.next;
      return currentNode.value;
    }

    let count = 0;
    while (count < index -1) {
      if (currentNode.next === null) {
        throw new Error('index is larger than the Linked list.');
      }
      currentNode = currentNode.next;
      count++;
    }

    const val = currentNode.next.value;
    currentNode.next = currentNode.next.next;

    return val;
  }

   // time-complexity O(n)
  // space-complexity O(1)
  deleteByValue(val: any) :boolean {
    if (this.root.value === val) {
      this.root = this.root.next;
      return true;
    }

    let currentNode = this.root;
    while (currentNode.next && currentNode.next.value !== val) {
      currentNode = currentNode.next;
    }

    if (currentNode?.next?.value === val) {
      currentNode.next = currentNode.next?.next;
      return true;
    } else {
      return false;
    }
  }

  // time-complexity:   O(n)
  // space-complexity:  O(1)
  getIndex(val: any) :number {
    let currentNode = this.root;
    let index = 0;

    while(currentNode.value !== val) {
      if (currentNode.next === null) {
        return -1;
      }

      currentNode = currentNode.next;
      index++;
    }

    return index;
  }

  // time-complexity:   O(n)
  // space-complexity:  O(1)
  getValue(index: number) :any {
    let currentNode = this.root;
    let count = 0;

    while(count < index) {
      if (currentNode.next === null) {
        throw new Error('index must be valid');
      }
      currentNode = currentNode.next;
      count++;
    }

    return currentNode.value;
  }

  // time-complexity:   O(n)
  // space-complexity:  O(1)
  // return all values in an array, with optional function argument to run on each value
  iterate(func? :Function) :any[] {
    const arr = []
    let currentNode = this.root;

    while (currentNode !== null) {
      if (func) {
        currentNode.value = func(currentNode.value);
      }

      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return arr;
  }
}
