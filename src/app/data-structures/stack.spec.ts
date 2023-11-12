import { Stack } from './stack';

describe('Stack', () => {
  it('should create an instance', () => {
    expect(new Stack()).toBeTruthy();
  });

  it('should start as an empty array', () => {
    const myStack = new Stack();

    expect(myStack.stack).toEqual([]);
  });

  it('should return undefined on pop() for an empty stack', () => {
    const myStack = new Stack();

    const val = myStack.pop();

    expect(val).toBe(undefined);
  });

  it('should return next value on pop()', () => {
    const myStack = new Stack();
    myStack.push(4).push(7).push(9).push(12);

    const val = myStack.pop();

    expect(val).toBe(12);
  });

  it('should remove value from stack on pop()', () => {
    const myStack = new Stack();
    myStack.push(4).push(7).push(9).push(12);

    const val = myStack.pop();

    expect(myStack.stack).toEqual([4, 7, 9]);
  });

  it('should push 1 value onto the stack', () => {
    const myStack = new Stack();

    myStack.push(5);

    expect(myStack.stack).toEqual([5]);
  });

  it('should push multiple values onto the stack', () => {
    const myStack = new Stack();

    myStack.push(1).push(2).push(23).push(54);

    expect(myStack.stack).toEqual([1, 2, 23, 54]);
  });

  it('should push multiple values of multiple types onto the stack', () => {
    const myStack = new Stack();

    myStack.push(1).push(2).push('hello').push(54).push('world');

    expect(myStack.stack).toEqual([1, 2, 'hello', 54, 'world']);
  });

  it('should return next value for peek()', () => {
    const myStack = new Stack();
    myStack.push(12).push(34).push(45);

    const val = myStack.peek();

    expect(myStack.stack[0]).toEqual(val);
  });

  it('should not modify the stack on peek()', () => {
    const myStack = new Stack();
    myStack.push(12).push(34).push(45);

    const val = myStack.peek();

    expect(myStack.stack).toEqual([12, 34, 45]);
  });

  it('should return 0 for length() on empty stack', () => {
    const myStack = new Stack();

    const length = myStack.length();

    expect(length).toBe(0);
  });

  it('should return 1 for length() on stack with 1 item', () => {
    const myStack = new Stack();
    myStack.push(23);

    const length = myStack.length();

    expect(length).toBe(1);
  });

  it('should return 5 for length() on stack with 5 items', () => {
    const myStack = new Stack();
    myStack.push(23).push(12).push(9).push(6).push(5);

    const length = myStack.length();

    expect(length).toBe(5);
  });

  it('should clear the stack on clear()', () => {
    const myStack = new Stack();
    myStack.push(23).push(12).push(9).push(6).push(5);

    myStack.clear();

    expect(myStack.stack).toEqual([]);
  });

  it('should return the empty stack on clear(), for chaining', () => {
    const myStack = new Stack();
    myStack.push(23).push(12).push(9).push(6).push(5);

    myStack.clear().push(7).push(9);

    expect(myStack.stack).toEqual([7, 9]);
  });

});
