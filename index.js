const { Stack, Queue } = require('./dataStructures');

// Stack
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

console.log('Stack:');
while (!stack.isEmpty()) {
  console.log(stack.pop());
}

// Queue
const queue = new Queue();
queue.enqueue('A');
queue.enqueue('B');
queue.enqueue('C');

console.log('Queue:');
while (!queue.isEmpty()) {
  console.log(queue.dequeue());
}