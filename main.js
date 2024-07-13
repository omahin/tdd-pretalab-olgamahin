const Queue = require('./queue');

const q = new Queue();

q.add(1);
q.add(2);
q.add(3);

console.log("Tamanho da fila:", q.size());

console.log("Primeiro item:", q.peek());

console.log("Removendo o primeiro item:", q.dequeue());

console.log("Novo primeiro item:", q.peek());