import { Queue } from "./queue";

export class Node {
  leftChild :Node | null | undefined;
  rightChild :Node | null | undefined;
  value: any;

  constructor(val? :any) {
    this.value = val;
  }
}

//  Award-winning haiku by Nick Myers:
//
//       The LEAVES have fallen.
//   Life has lost its cutting EDGE.
//        Yet the ROOT remains.
//

export class BinaryTree {
  root :Node;

  constructor(val? :any) {
    this.root = new Node(val);
  }

  // time-complexity:   O(n)
  // space-complexity:  O(1)
  depthFirstSearch(val: any, node? :Node) :Node | null | undefined {
    // function will be called externally with no node specified
    // node will only be specified during recursion
    if (!node) {
      node = this.root;
    }
    
    if (val === node.value) {
      return node;
    }

    if (val === node.leftChild?.value) {
      return node.leftChild;
    } 
    else if (node.leftChild) {
      const leftResult = this.depthFirstSearch(val, node.leftChild);
      if (leftResult) {
        return leftResult;
      }
    }

    if (val === node.rightChild?.value) {
      return node.rightChild;
    } else if (node.rightChild) {
      const rightResult = this.depthFirstSearch(val, node.rightChild);
      if (rightResult) {
        return rightResult;
      }
    }

    return null;
  }

  // time-complexity O(n)
  // space-complexity O(log(n))
  breadthFirstSearch(val: any) :Node | null | undefined {
    const q = new Queue();  // I get to reuse my Queue object!  :)
    q.push(this.root);

    while (q.length() > 0) {
      const node = q.pop();

      if (val === node.value ) {
        return node;
      }
      if (node.leftChild) {
        q.push(node.leftChild);
      }
      if (node.rightChild) {
        q.push(node.rightChild);
      }
    }

    return null;
  }
}
