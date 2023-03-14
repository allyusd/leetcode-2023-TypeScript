export function exportWarp(command: string[], data: number[][]): any[] {
  return implementStack(command, data);
}

// https://www.baeldung.com/cs/stack-two-queues
class MyStack {
  queue1: number[] = [];
  queue2: number[] = [];

  constructor() {}

  push(x: number): void {
    while (this.queue1.length !== 0) {
      const tmp = this.queue1.shift();

      if (tmp !== undefined) {
        this.queue2.push(tmp);
      }
    }

    this.queue1.push(x);

    while (this.queue2.length !== 0) {
      const tmp = this.queue2.shift();

      if (tmp !== undefined) {
        this.queue1.push(tmp);
      }
    }
  }

  pop(): number {
    const tmp = this.queue1.shift();

    if (tmp !== undefined) {
      return tmp;
    }
    return 0;
  }

  top(): number {
    return this.queue1[0];
  }

  empty(): boolean {
    return this.queue1.length === 0;
  }
}

// 2023-03-14
// 225. Implement Stack using Queues
/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
function implementStack(command: string[], data: number[][]): (null | number | boolean)[] {
  const output: (null | number | boolean)[] = [];

  let stack = new MyStack();
  for (let i = 0; i < command.length; i++) {
    switch (command[i]) {
      case "MyStack":
        stack = new MyStack();
        output.push(null);
        break;
      case "push":
        stack.push(data[i][0]);
        output.push(null);
        break;
      case "pop":
        output.push(stack.pop());
        break;
      case "top":
        output.push(stack.top());
        break;
      case "empty":
        output.push(stack.empty());
        break;
    }
  }

  return output;
}
