import { BinaryTree, Node } from "./binary-tree";

export class BinarySearchTree extends BinaryTree {

  // time-complexity:   O(log(n))
  // space-complexity:  O(1)
  insert(value: number) :BinarySearchTree {
    let currentNode = this.root;

    while (true) {
      if (value < currentNode.value) {
        if (!currentNode.leftChild) {
          currentNode.leftChild = new Node(value);
          break;
        } else {
          currentNode = currentNode.leftChild;
        }
      }
      if (value >= currentNode.value) {
        if (!currentNode.rightChild) {
          currentNode.rightChild = new Node(value);
          break;
        } else {
          currentNode = currentNode.rightChild;
        }
      }
    }

    return this;
  }

  // time-complexity:   O(log(n))
  // space-complexity:  O(1)
  find(val: number) :Node | null | undefined {
    if (val === this.root.value) {
      return this.root;
    }

    let currentNode = this.root;
    while (currentNode !== null) {
      if (val === currentNode.value) {
        return currentNode;
      } else if (val < currentNode.value && currentNode.leftChild) {
        currentNode = currentNode.leftChild;
      } else if (val >= currentNode.value && currentNode.rightChild) {
        currentNode = currentNode.rightChild;
      } else {
        return null;
      }
    }

    return null;
  }

  // TODO: delete()
  delete() {}
}
