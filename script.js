'use strict';

// SLICE METHOD
let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.slice(2));
console.log(arr.slice(-1));
console.log(arr.slice(1, 4));
console.log(arr.slice());

// SPLICE METHOD - This is the same as the slice method only that it changes(mutates) the arr
console.log(arr.splice(2));
console.log(arr);

// REVERSE - as the name states this method reverses the elements on an array and just like the splice method, it mutates the original array
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT - This is used to join two arrays, and it does not change the original array
let arr1 = ['a', 'b', 'c', 'd', 'e'];
const alphabets = arr1.concat(arr2);
console.log(alphabets);
