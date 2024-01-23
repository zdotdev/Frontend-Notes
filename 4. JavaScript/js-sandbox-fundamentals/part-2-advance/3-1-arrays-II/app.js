'use strict';
const c = console.log.bind(this);
// Emptying an array
let numbers = [1, 2, 3, 4, 5, 6, 1, 8, 9, 10];
let another = numbers;
// Solutions
// 1. Assign an empty array -> not recommended for multiple references
// numbers = [];

// 2. Set the length to 0 -> recommended for cleaner code
// numbers.length = 0;

// 3. Use .splice() -> recommended for large arrays
// numbers.splice(0, numbers.length);

// 4. Use .pop() -> recommended for large arrays
// while (numbers.length > 0) {
//   numbers.pop();
// }

// Combining and Slicing Arrays
const first = [1, 2, 3]; // Primitive Type
const second = [4, 5, 6];
const firstOjb = [{ id: 1 }]; // Reference Type

// Combining arrays
// .concat() -> returns a new array
const combined = first.concat(second);
<<<<<<< HEAD

=======
c(combined);
>>>>>>> ffad6cf0236afccdbd20959c487cf2c53378a86c
// Splitting arrays
// .slice() -> returns a new array
const slice = combined.slice(0, 3);
c(slice);

// Spread Operator -> ES6 a more elegant way to combine / copy arrays
<<<<<<< HEAD
const combinedSpread = [...first, ...second, 'a', ...firstOjb];
=======
const combined2 = [...first, ...second, 'a', ...firstOjb];
c(combined2);
>>>>>>> ffad6cf0236afccdbd20959c487cf2c53378a86c

// Iterating arrays
const fruits = ['🍈', '🍉', '🍊', '🍋', '🍌'];

// Solution 1 - for of loop
for (let i of fruits) {
  c(i);
}
<<<<<<< HEAD

=======
>>>>>>> ffad6cf0236afccdbd20959c487cf2c53378a86c
// Solution 2 - forEach()
fruits.forEach((fruit) => c(fruit));

// Joining arrays
// -> when you see a ? in a method it means it's optional
<<<<<<< HEAD
// Example
const message = 'how to learn javascript in a day';
const parts = message.split(' ');

// const combined = parts.join('+'); // this method is used to create a slug for a url
const combinedMessage = parts.join('%');
// c(combinedMessage);
=======

// Example
const message = 'how to learn javascript in a day';
// const parts = message.split(' ');
const parts = message.split(' '); // this method is used to split a string into an array
c(parts);
// const combined = parts.join('+'); // this method is used to create a slug for a url
const slug = parts.join('%');
c(slug);
>>>>>>> ffad6cf0236afccdbd20959c487cf2c53378a86c
// slug -> a string that is used to identify a web page in a search engine
// https://www.google.com/search?q=how+to+learn+javascript+in+a+day

// Sorting arrays
const randomNumbers = [3, 2, 5, 1, 4];
const users = [
  { id: 1, name: 'Jane Doe' }, // J -> 74
  { id: 2, name: 'Dave Smith' }, // D -> 68
];

// Solution 1 - .sort() -> useful when array is made of strings or numbers
const sorted = randomNumbers.sort();
c(sorted);
// Solution 2 - .reverse()
const reversed = randomNumbers.reverse();
c(reversed);
// Solution 3 - .sort() with a compare function -> useful when array is made of objects
const sortUser = users.sort((a, b) => {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();
  if (nameA > nameB) return 1;
  if (nameA < nameB) return -1;
  return 0;
});

c(sortUser);

// ASCII Table -> https://www.asciitable.com/
// use case -> sorting strings
// .toLowerCase() -> converts a string to lowercase
// .toUpperCase() -> converts a string to uppercase

const numberSet = new Array(1, -2, 3, 4, 5, -6, 7, 8, 9, 10);
// Testing the elements of an array
// .every() -> returns true if all elements in the array pass the test -> returns false if at least one element in the array fails the test
const testAll = numberSet.every((n) => n >= 0);
c(testAll);
// .some() -> returns true if at least one element in the array pass the test -> returns false if all elements in the array fails the test
const testSome = numberSet.some((n) => n >= 0);
c(testSome);
// Filtering an array -> returns a new array with the elements that pass the test -> returns an empty array if no elements pass the test
// .filter() -> returns a new array
const filtered = numberSet.filter((n) => n >= 0).every((n) => n >= 0);
c(filtered);

// Mapping an array

// .map() -> returns a new array
const doubled = numbers.map((n) => n * 2);
const itemList = fruits.map((i) => `<li>${i}</li>`).join('');
c(itemList);
// Chaining

const chained = numberSet.filter((n) => n >= 0).map((n) => ({ value: n }));
c(chained);

// Reducing an array
// .reduce() -> returns a single value (number, string, object, array) -> used to calculate a sum of an array
// Example
const bills = [50, 100, 200, 300, 400];
// calculate the total of the bills
// using for of loop
let total = 0;
for (let bill of bills) {
  total += bill;
}
c(total);

// using .reduce()
// accumulator -> the value that is returned from the previous iteration
// currentValue -> the current value of the array

const total2 = bills.reduce((a, b) => a + b, 0);
// a -> 50, b -> 100, a --> 150
// a -> 150, b -> 200, a --> 350
// a -> 350, b -> 300, a --> 650
// a -> 650, b -> 400, a --> 1050
c(`Using for of loop ${total}, using .reduce() ${total2}`);
