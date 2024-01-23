const c = console.log.bind(this);
const dateNow = new Date().getFullYear();

// Object Construction

const dog = {
  name: 'Marley',
  color: 'Brown',
  age: 3,
  breed: 'Labrador Retriever',
};

// const avenger = {
//   first_name: 'Tony',
//   last_name: 'Stark',
//   age: dateNow - 1966,
//   role: 'Ironman',
//   address: '',
//   status: '',
//   isActive: true,
// };

// c(dog);

// Retrieve Data from an Object
// Dot Notation
// c(dog.name);
// Brackets Notation
// c(dog['age']);

// Mutate Object data
// dog.age = 4;
// Brackets Notation
// dog.color = 'Light Brown';
// c(dog);

const cat = {
  name: 'Salem',
  color: 'Black',
  age: null,
  breed: 'Persian',
  birthYear: 2018,
  calcAge: function () {
    this.age = dateNow - this.birthYear;
    return this.age;
  },
};

c(cat);
cat.calcAge();
c(cat);
cat.birthYear = 2009;
cat.calcAge();
c(cat);

// Object Methods
// const jLeague = {
//   first_name: 'Bruce',
//   last_name: 'Wayne',
//   age: null,
//   birthYear: 1989,
//   role: 'Batman',
//   address: '',
//   status: '',
//   isActive: true,
//   calcAge: function () {
//     this.age = dateNow - this.birthYear;
//     return;
//   },
// };

// jLeague.calcAge();
// c(jLeague);
