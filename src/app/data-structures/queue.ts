export class Queue {
  q :any = [];

  push(val: any) :Queue {
    this.q = [...this.q, val];

    return this;
  }

  pop() :any {
    const val = this.q[0];
    this.q = this.q.slice(1, this.q.length);

    return val;
  }

  peek() :any {
    return this.q[0];
  }

  length() :number {
    return this.q.length;
  }

  clear() :Queue {
    this.q = [];

    return this;
  }
}
