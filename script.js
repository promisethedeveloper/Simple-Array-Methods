'use strict';

// SLICE METHOD
let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.slice(2));
console.log(arr.slice(-1));
console.log(arr.slice(1, 4));
console.log(arr.slice());

// SPLICE METHOD - This is the same as the slice method only that it changes(mutates)
console.log(arr.splice(2));
console.log(arr);
