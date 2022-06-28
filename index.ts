// import { Queue } from "queue-typescript";

let message: string = "moloko";

console.log(message);


//Generics

abstract class AbstractQueue<T> {
  data: T[] = [];
  add(item: T) {
    this.data.push(item);
  }
  get() {
    return this.data.shift();
  }
}

class Queue<T> extends AbstractQueue<T> {
  data: T[] = [];
  add(item: T) {
    this.data.push(item);
  }
  get() {
    return this.data.shift();
  }
}


let queue: Queue<number> = new Queue<number>();

for (let i = 0; i < 5; i++) {
    queue.add(i);
}

for (let i = 0; i < 5; i++) {
  console.log("Queue: " + queue.get());
}

// Overriding + extend

class Stack<T> extends Queue<T> {
  data: T[] = [];
  add(item: T) {
    this.data.push(item);
  }
  get() {
    return this.data.pop();
  }
}

let stack: Stack<number> = new Stack();

for (let i = 0; i < 5; i++) {
  stack.add(i);
}

for (let i = 0; i < 5; i++) {
  console.log("Stack: " + stack.get());
}


// type assertion 

let moloko: string;

let value: unknown = 'moloko';

moloko = value as string;

//Вариант ниже не рекумендуются, из-за плохой совместимости. 
//Может не скомпилироватся в некоторых версиях EcmaScript

moloko = <string>value; 


developerName = "Palevoda";

console.log(developerName);






