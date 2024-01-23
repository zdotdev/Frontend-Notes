'use strict';
const c = console.log.bind(this);

// Math Object
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

// Examples of Math Object
// Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive)
// Math.floor() returns the largest integer less than or equal to a given number.
// Math.round() returns the smallest integer greater than or equal to a given number
// Math.max() returns the largest integer greater than or equal to
// Math.min() returns the smallest integer greater than or equal to
// Math.PI returns the value of PI

// String Objects
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

// Examples of String Objects
// String.length returns the length of a string
// String.includes() returns true if a string contains a specified value
// String.startsWith() returns true if a string starts with a specified value
// String.endsWith() returns true if a string ends with a specified value
// String.indexOf() returns the position of the first occurrence of a specified value in a string
// String.lastIndexOf() returns the position of the last occurrence of a specified value in a string.
// String.slice() extracts a part of a string and returns the extracted part in a new string
// String.split() splits a string into an array of substrings
// String.trim() removes whitespace from both sides of a string
// String.replace() replaces a specified value with another value in a string
// String.toUpperCase() converts a string to uppercase letters
// String.toLowerCase() converts a string to lowercase letters
// String[0] returns the character at the specified index (position) in a string
// String.charAt(0) returns the character at the specified index (position) in a string

// string primitive
const message = 'hi';
const messageObj = new String('my');

c(message);

// Escape sequences
// Special characters can be encoded using escape sequences:
// \' single quote
// \" double quote
// \\ backslash
// \n newline

// JavaScript Literals
// A literal is a data value that appears directly in a program.
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Literals
// String literal -> '', "" => single or double quote
// Numeric literal -> 1, 2, 3
// Boolean literal -> true, false
// Object literal -> {key: value}
// Array literal -> [1, 2, 3]
// Function literal -> function() {}
// Regular expression literal -> /ab+c/
// Template literal -> `` => backtick

// Dates
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

const now = new Date();
const date1 = new Date('September 11 2022 09:00');
const date2 = new Date(2022, 8, 11, 9);

// Date Methods
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#instance_methods

now.getFullYear();

now.getMonth();

now.toDateString();

now.toTimeString();

now.toISOString();
