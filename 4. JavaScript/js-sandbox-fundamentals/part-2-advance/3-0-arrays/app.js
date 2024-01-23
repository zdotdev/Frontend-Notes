'use strict';
const c = console.log.bind(this);
// Adding new elements
const fruits = ['🍈', '🍉', '🍊', '🍋', '🍌'];
// Add an element to the end
fruits.push('🍍', '🍎');

// Add an element to the beginning
fruits.unshift('🍇');

// Add an element in the middle
// splice(start, deleteCount, item1, item2, item3, ...)
fruits.splice(2, 0, 'Hello', 'There');

// Removing elements

// Remove an element from the end
// .pop() removes the last element and returns it

// Remove an element from the beginning
//  .shift() removes the first element and returns it

// Remove an element from the middle
// splice(start, deleteCount, item1, item2, item3, ...)

// Finding elements - Primitive types

// .indexOf(item, start) - returns the index of the first occurrence of the item
// .lastIndexOf(item, start) - returns the index of the last occurrence of the item
// .includes(item, start) - returns true if the item is found
const numbers = [1, 2, 3, 4, 5, 6, 1, 8, 9, 10];
<<<<<<< HEAD

numbers.indexOf(1, 3);
numbers.lastIndexOf(1);
numbers.includes(1, 7);

=======
const indexArr = numbers.indexOf(1, 2);
const lastIndexArr = numbers.lastIndexOf(1);
const arrIncludes = numbers.includes(1, 5);
c(arrIncludes);
>>>>>>> ffad6cf0236afccdbd20959c487cf2c53378a86c
// Finding Elements - Reference Types

// .find(callback) - returns the first element that satisfies the condition
// .findIndex(callback) - returns the index of the first element that satisfies the condition

const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Bevs' },
];

<<<<<<< HEAD
const findUser = users.find((user) => user.id === 4);
const findUserIndex = users.findIndex((user) => user.id === 4);

c(findUserIndex);
=======
users.find((user) => user.id === 1); // find the first element that satisfies the condition
users.findIndex((user) => user.id === 11); // find the index of the first element that satisfies the condition
>>>>>>> ffad6cf0236afccdbd20959c487cf2c53378a86c
