const c = console.log.bind(this);
// Loops are made to automate repetitive task
// c(`Count 1`);
// c(`Count 2`);
// c(`Count 3`);

// for (let count = 1; count <= 100; count++) {
//   c(`Count ${count}`);
// }

// for loops keeps running while conditions are TRUE
// for (let i = 1; i <= 10; i++) {
//   c(`Lift weight rep ${i} 🏋️‍♂️`);
// }

const yearNow = new Date().getFullYear();
const birthYear = [1990, 1965, 1964, 1954];
const age = [];

for (let i = 0; i < birthYear.length; i++) {
  age.push(yearNow - birthYear[i]);
  c(age);
}

// Looping Arrays, Breaking and Continuing
const avengers = ['Tony', 'Steve', 'Thor', 'Bruce', 23, 'Natasha', true];
// Continue
// for (let i = 0; i < avengers.length; i++) {
//   if (typeof avengers[i] !== 'string') continue;
//   c(avengers[i]);
// }

// Break
// for (let i = 0; i < avengers.length; i++) {
//   if (typeof avengers[i] === 'number') break;
//   c(avengers[i]);
// }

// Looping Backwards and Loops in Loops
// for (let i = 10; i >= 0; i--) {
//   c(`Launch in ${i} seconds`);
//   if (i === 0) {
//     c(`Lift off 🚀`);
//   }
// }
