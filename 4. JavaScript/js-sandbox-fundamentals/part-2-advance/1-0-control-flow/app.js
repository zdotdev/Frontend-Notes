'use strict';
const c = console.log.bind(this);

// If elseif else
const isTrue = true;
if (isTrue) {
  // do something
} else if (!isTrue) {
  // do something
} else {
  // end of statement
}

// Switch
const expression = 'a';
switch (expression) {
  case 'a':
    // do something
    break;
  case 'b':
    // do something
    break;
  default:
    // end of statement
    break;
}

// for loop

for (let i = 0; i < 10; i++) {
  // do something
}

//  while loop
let v = 0;
while (v < 10) {
  // do something
  v++;
}
// do while loop
let a = 0;
do {
  // do something

  a++;
} while (a < 10);

const person = {
  name: 'John',
  age: 30,
  hobbies: ['music', 'movies', 'sports'],
  address: '123 Main St',
};

const colors = new Array('red', 'green', 'blue');

// for in loop mostly used to iterate over objects

for (key in person) {
  c(key, person[key]);
}

// for of loop mostly used to iterate over arrays
for (color of colors) {
  c(color);
}
