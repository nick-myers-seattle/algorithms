export class Stack {
    stack :any = [];
  
    push(val: any) :Stack {
      this.stack = [...this.stack, val];
  
      return this;
    }
  
    pop() :any {
      const val = this.stack[this.stack.length -1];
      this.stack = this.stack.slice(0, this.stack.length -1);
  
      return val;
    }
  
    peek() :any {
      return this.stack[0];
    }
  
    length() :number {
      return this.stack.length;
    }
  
    clear() :Stack {
      this.stack = [];
  
      return this;
    }
  }
  