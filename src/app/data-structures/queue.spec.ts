import { Queue } from './queue';

describe('Queue', () => {
  it('should create an instance', () => {
    expect(new Queue()).toBeTruthy();
  });

  it('should start as an empty array', () => {
    const myQ = new Queue();

    expect(myQ.q).toEqual([]);
  });

  it('should return undefined on pop() for an empty queue', () => {
    const myQ = new Queue();

    const val = myQ.pop();

    expect(val).toBe(undefined);
  });

  it('should return next value on pop()', () => {
    const myQ = new Queue();
    myQ.push(4).push(7).push(9).push(12);

    const val = myQ.pop();

    expect(val).toBe(4);
  });

  it('should remove value from queue on pop()', () => {
    const myQ = new Queue();
    myQ.push(4).push(7).push(9).push(12);

    const val = myQ.pop();

    expect(myQ.q).toEqual([7, 9, 12]);
  });

  it('should push 1 value onto the queue', () => {
    const myQ = new Queue();

    myQ.push(5);

    expect(myQ.q).toEqual([5]);
  });

  it('should push multiple values onto the queue', () => {
    const myQ = new Queue();

    myQ.push(1).push(2).push(23).push(54);

    expect(myQ.q).toEqual([1, 2, 23, 54]);
  });

  it('should push multiple values of multiple types onto the queue', () => {
    const myQ = new Queue();

    myQ.push(1).push(2).push('hello').push(54).push('world');

    expect(myQ.q).toEqual([1, 2, 'hello', 54, 'world']);
  });

  it('should return next value for peek()', () => {
    const myQ = new Queue();
    myQ.push(12).push(34).push(45);

    const val = myQ.peek();

    expect(myQ.q[0]).toEqual(val);
  });

  it('should not modify the queue on peek()', () => {
    const myQ = new Queue();
    myQ.push(12).push(34).push(45);

    const val = myQ.peek();

    expect(myQ.q).toEqual([12, 34, 45]);
  });

  it('should return 0 for length() on empty queue', () => {
    const myQ = new Queue();

    const length = myQ.length();

    expect(length).toBe(0);
  });

  it('should return 1 for length() on queue with 1 item', () => {
    const myQ = new Queue();
    myQ.push(23);

    const length = myQ.length();

    expect(length).toBe(1);
  });

  it('should return 5 for length() on queue with 5 items', () => {
    const myQ = new Queue();
    myQ.push(23).push(12).push(9).push(6).push(5);

    const length = myQ.length();

    expect(length).toBe(5);
  });

  it('should clear the queue on clear()', () => {
    const myQ = new Queue();
    myQ.push(23).push(12).push(9).push(6).push(5);

    myQ.clear();

    expect(myQ.q).toEqual([]);
  });

  it('should return an empty Queue on clear(), for chaining', () => {
    const myQ = new Queue();
    myQ.push(23).push(12).push(9).push(6).push(5);

    myQ.clear().push(7).push(9);

    expect(myQ.q).toEqual([7, 9]);
  });

});
