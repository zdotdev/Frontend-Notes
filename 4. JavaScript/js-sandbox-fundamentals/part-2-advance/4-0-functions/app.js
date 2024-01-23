'use strict';
const c = console.log.bind(this);

// Function Declaration
function walk() {
  // do something
}

// Function Expression
const run = function () {
  // do something
};

// Named Function Expression
const sprint = function sprint() {
  // do something
};

// Arrow Function
const jump = () => {
  // do something
};

// Hoisting -> JavaScript moves all function declarations to the top of the file
fly(); // this works because of hoisting

function fly() {
  c('flying');
}

// Arguments -> an array-like object
function sum(a, b) {
  return a + b; // this is a return statement
}

function total() {
  let sum = 0;
  for (let value of arguments) {
    // arguments is an array-like object
    sum += value;
  }
  return sum;
}

c(total(1, 2, 3, 5, 6, 100));

// Rest Operator -> ES6
// ... -> rest operator
function average(...args) {
  // average = sum of items / total items
  // let sum = 0;
  // for (let arg of args) {
  //   sum += arg;
  //   c(sum);
  // }
  // return sum / args.length;
  return args.reduce((a, b) => a + b) / args.length;
}

average(1, 2, 3, 5, 6);

// Default Parameters -> ES6

// function calcInterest(principal, rate) {
//   // interest = principal * rate
//   return (principal * rate) / 100;
// }

// Old Way
// function calcInterest(principal, rate) {
//   rate = rate || 3.5;
//   return (principal * rate) / 100;
// }

// ES6
// default parameters
function calcInterest(principal, years, rate = 3.5) {
  return ((principal * rate) / 100) * years;
}
c(calcInterest(200, 10));
// Best practice is to put default parameters at the end

// Getters and Setters -> ES6

let personObj = {
  firstName: 'John',
  lastName: 'Doe',
  // getter
  get fullName() {
    return `${personObj.firstName} ${personObj.lastName}`;
  },
  // setter
  set fullName(value) {
    const parts = value.split(' ');
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

c(personObj);
c(personObj.fullName);
personObj.fullName = 'John Smith';
c(personObj.fullName);

// getter -> access properties
// setter -> change (mutate) them

// Error Handling -> try, catch, throw, finally -> ES6
// Defensive Programming -> try to prevent errors from happening

// Local vs Global Scope

// Let vs Var

// var -> function scope -> global scope -> window object
// avoid using var -> use let and const
// let -> block scope -> global scope

// This Keyword
// this -> refers to the object that is executing the current function
// method -> obj -> this -> obj
// function -> global (window, global) -> this -> global (window, global)

//  Changing the value of this

// Solution 1 -> self = this
// const image = {
//   title: 'My Image',
//   tags: ['tag1', 'tag2'],
//   showTags() {
//     const self = this;
//     this.tags.forEach(function (tag) {
//       console.log(self.title, tag);
//     }, this);
//   },
// };

// Solution 2 -> bind Method
//   title: 'My Image',
//   tags: ['tag1', 'tag2'],
//   showTags() {
//     this.tags.forEach(
//       function (tag) {
//         console.log(this.title, tag);
//       }.bind(this)
//     );
//   },
// };

// Solution 3 -> ES6 Arrow Function
// const image = {
//   title: 'My Image',
//   tags: ['tag1', 'tag2'],
//   showTags() {
//     this.tags.forEach((tag) => {
//       c(this.title, tag);
//     });
//   },
// };

// Call, Apply, and Bind -> ES6
// call -> calls a function with a given this value and arguments provided individually
// apply -> calls a function with a given this value and arguments provided as an array
// bind -> returns a new function, allowing you to pass in a this array and any number of arguments
