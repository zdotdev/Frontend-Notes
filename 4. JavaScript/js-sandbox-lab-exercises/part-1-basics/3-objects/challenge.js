// Write a function describePerson that takes an object with properties "name" and "age" as an argument and returns a string in the format "My name is [name] and I am [age] years old."
// Write a function describeBook that takes an object with properties "title", "author", and "year" as an argument and returns a string in the format "The book [title] by [author] was published in [year]."

'use strict';
const c = console.log.bind(this);

// <---------- Do Not Touch the Code Beyond this line ----------------------------->
console.log(describePerson({ name: 'John', age: 30 })); // Expected output: "My name is John and I am 30 years old."
console.log(describePerson({ name: 'Alice', age: 25 })); // Expected output: "My name is Alice and I am 25 years old."
console.log(
  describeBook({
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    year: 1925,
  })
); // Expected output: "The book The Great Gatsby by F. Scott Fitzgerald was published in 1925."
console.log(
  describeBook({
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    year: 1960,
  })
); // Expected output: "The book To Kill a Mockingbird by Harper Lee was published in 1960."
