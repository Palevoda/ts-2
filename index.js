"use strict";
// import { Queue } from "queue-typescript";
let message = "moloko";
console.log(message);
//Generics
class AbstractQueue {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
    get() {
        return this.data.shift();
    }
}
// @sealed
class Queue extends AbstractQueue {
    constructor() {
        super(...arguments);
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
    get() {
        return this.data.shift();
    }
}
let queue = new Queue();
for (let i = 0; i < 5; i++) {
    queue.add(i);
}
for (let i = 0; i < 5; i++) {
    console.log("Queue: " + queue.get());
}
// Overriding + extend
class Stack extends Queue {
    constructor() {
        super(...arguments);
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
    get() {
        return this.data.pop();
    }
}
let stack = new Stack();
for (let i = 0; i < 5; i++) {
    stack.add(i);
}
for (let i = 0; i < 5; i++) {
    console.log("Stack: " + stack.get());
}
// type assertion 
let moloko;
let value = 'moloko';
moloko = value;
//Вариант ниже не рекумендуются, из-за плохой совместимости. 
//Может не скомпилироватся в некоторых версиях EcmaScript
moloko = value;
