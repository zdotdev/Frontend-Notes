'use strict';
const c = console.log.bind(this);

// Value vs Reference

// Example

let x = 10;
let y = x;

x += 10;

c(x, y);
// c(`this is x: ${x} and this is y: ${y}`);

let objX = { value: 10 };
let objY = objX;

objX.value += 10;

c(`this is objX: ${objX.value} and this is objY: ${objY.value}`);

// Example
let number = 10;
function increaseValue(number) {
  number++;
}

increaseValue(number);
c(number);

// Example
let numberObj = { value: 10 };

function increaseObjValue(numberObj) {
  numberObj.value++;
}

increaseObjValue(numberObj);
c(numberObj);

// Primitives are copied by their value
// Objects are copied by their reference

// Primitive Types: number, string, boolean, undefined, null
// Reference Types: all objects, functions, arrays
