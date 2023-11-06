const { Stack, Queue } = require('./dataStructures');

test('Test Stack functionality', () => {
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  expect(stack.pop()).toBe(3);
  expect(stack.pop()).toBe(2);
  expect(stack.pop()).toBe(1);
  expect(stack.isEmpty()).toBe(true);
});

test('Test Queue functionality', () => {
  const queue = new Queue();
  queue.enqueue('A');
  queue.enqueue('B');
  queue.enqueue('C');
  expect(queue.dequeue()).toBe('A');
  expect(queue.dequeue()).toBe('B');
  expect(queue.dequeue()).toBe('C');
  expect(queue.isEmpty()).toBe(true);
});