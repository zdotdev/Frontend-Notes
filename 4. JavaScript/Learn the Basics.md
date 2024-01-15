My first JavaScript:
```JavaScript
<!DOCTYPE html>
<html>
<body>

<h2>My First JavaScript</h2>

<button type="button" onclick="document.getElementById('demo').innerHTML = Date()">
Click me to display Date and Time.</button>

<p id="demo"></p>

</body>
</html> 
```

# JS Introduction
## JS can change HTML content
One of many JavaScript HTML methods is `getElementById()`.

The example below "finds" an HTML element (with id="demo"), and changes the element content (innerHTML) to "Hello JavaScript":
```Js
<!DOCTYPE html>
<html>
<body>

<h2>What Can JavaScript Do?</h2>

<p id="demo">JavaScript can change HTML content.</p>

<button type="button" onclick='document.getElementById("demo").innerHTML = "Hello JavaScript!"'>Click Me!</button>

</body>
</html>
```

JavaScript accepts both double and single quotes:

```js
<!DOCTYPE html>
<html>
<body>

<h2>What Can JavaScript Do?</h2>

<p id="demo">JavaScript can change HTML content.</p>

<button type="button" onclick="document.getElementById('demo').innerHTML = 'Hello JavaScript!'">Click Me!</button>

</body>
</html>

```
## JS can change html attribute values
In this example JavaScript changes the value of the `src` (source) attribute of an `<img>` tag:
```html
<!DOCTYPE html>
<html>
<body>

<h2>What Can JavaScript Do?</h2>

<p>JavaScript can change HTML attribute values.</p>

<p>In this case JavaScript changes the value of the src (source) attribute of an image.</p>

<button onclick="document.getElementById('myImage').src='pic_bulbon.gif'">Turn on the light</button>

<img id="myImage" src="pic_bulboff.gif" style="width:100px">

<button onclick="document.getElementById('myImage').src='pic_bulboff.gif'">Turn off the light</button>

</body>
</html>
```

## JS can change html styles(CSS)
Changing the style of an HTML element, is a variant of changing an HTML attribute:
```js
document.getElementById("demo").style.fontSize = "35px";
```

## JS can hide html elements
```js
document.getElementById("demo").style.display = "none";
```

## JS can show html elements
```js
document.getElementById("demo").style.display = "block";
```
# JavaScript Where To
## The `<script>` Tag
In HTML, JavaScript code is inserted between `<script>` and `</script>` tags.
```js
<script>  
document.getElementById("demo").innerHTML = "My First JavaScript";  
</script>
```

## JS functions and events
A JavaScript `function` is a block of JavaScript code, that can be executed when "called" for.

For example, a function can be called when an **event** occurs, like when the user clicks a button.

## JS in `<head>` or `<body>`
You can place any number of scripts in an HTML document.

Scripts can be placed in the `<body>`, or in the `<head>` section of an HTML page, or in both.
## JS in `<head>`
In this example, a JavaScript `function` is placed in the `<head>` section of an HTML page.

The function is invoked (called) when a button is clicked:
```html
<!DOCTYPE html>  
<html>  
<head>  
<script>  
function myFunction() {  
  document.getElementById("demo").innerHTML = "Paragraph changed.";  
}  
</script>  
</head>  
<body>

<h2>Demo JavaScript in Head</h2>  
  
<p id="demo">A Paragraph</p>  
<button type="button" onclick="myFunction()">Try it</button>

</body>  
</html>
```

## JS in `<body>`
In this example, a JavaScript `function` is placed in the `<body>` section of an HTML page.

The function is invoked (called) when a button is clicked:
```html
<!DOCTYPE html>  
<html>  
<body>  
  
<h2>Demo JavaScript in Body</h2>  
  
<p id="demo">A Paragraph</p>  
  
<button type="button" onclick="myFunction()">Try it</button>  
  
<script>  
function myFunction() {  
  document.getElementById("demo").innerHTML = "Paragraph changed.";  
}  
</script>  
  
</body>  
</html>
```
## External JS
Scripts can also be placed in external files:

**External file: myScript.js**
```js
function myFunction() {  
  document.getElementById("demo").innerHTML = "Paragraph changed.";  
}
```
External scripts are practical when the same code is used in many different web pages.

JavaScript files have the file extension **.js**.

To use an external script, put the name of the script file in the `src` (source) attribute of a `<script>` tag:
```html
<script src="myScript.js"></script>
```
You can place an external script reference in `<head>` or `<body>` as you like.

The script will behave as if it was located exactly where the `<script>` tag is located.

## External References
An external script can be referenced in 3 different ways:

- With a full URL (a full web address)
- With a file path (like /js/)
- Without any path

**URL**
```html
<script src="https://www.w3schools.com/js/myScript.js"></script>
```
**File path**
```html
<script src="/js/myScript.js"></script>
```
**no folder path**
```html
<script src="myScript.js"></script>
```

# JavaScript Output
## JS display possibilities 
JavaScript can "display" data in different ways:

- Writing into an HTML element, using `innerHTML`.
- Writing into the HTML output using `document.write()`.
- Writing into an alert box, using `window.alert()`.
- Writing into the browser console, using `console.log()`.

## Using innerHTML
To access an HTML element, JavaScript can use the `document.getElementById(id)` method.

The `id` attribute defines the HTML element. The `innerHTML` property defines the HTML content:
```html
<!DOCTYPE html>
<html>
<body>

<h2>My First Web Page</h2>
<p>My First Paragraph.</p>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = 5 + 6;
</script>

</body>
</html> 
```
## Using document.write()
For testing purposes, it is convenient to use `document.write()`:
```html
<!DOCTYPE html>  
<html>  
<body>  
  
<h1>My First Web Page</h1>  
<p>My first paragraph.</p>  
  
<script>  
document.write(5 + 6);  
</script>  
  
</body>  
</html>
```
Using document.write() after an HTML document is loaded, will **delete all existing HTML**:
```html
<!DOCTYPE html>  
<html>  
<body>  
  
<h1>My First Web Page</h1>  
<p>My first paragraph.</p>  
  
<button type="button" onclick="document.write(5 + 6)">Try it</button>  
  
</body>  
</html>
```
The document.write() method should only be used for testing.
## Using window.alert()
You can use an alert box to display data:
```html
<!DOCTYPE html>  
<html>  
<body>  
  
<h1>My First Web Page</h1>  
<p>My first paragraph.</p>  
  
<script>  
window.alert(5 + 6);  
</script>  
  
</body>  
</html>
```
You can skip the `window` keyword.

In JavaScript, the window object is the global scope object. This means that variables, properties, and methods by default belong to the window object. This also means that specifying the `window` keyword is optional:
```html
<!DOCTYPE html>  
<html>  
<body>  
  
<h1>My First Web Page</h1>  
<p>My first paragraph.</p>  
  
<script>  
alert(5 + 6);  
</script>  
  
</body>  
</html>
```
## Using console.log()
For debugging purposes, you can call the `console.log()` method in the browser to display data.
```html
<!DOCTYPE html>  
<html>  
<body>  
  
<script>  
console.log(5 + 6);  
</script>  
  
</body>  
</html>
```

## JS Print
JavaScript does not have any print object or print methods.

You cannot access output devices from JavaScript.

The only exception is that you can call the `window.print()` method in the browser to print the content of the current window.
```html
<!DOCTYPE html>  
<html>  
<body>  
  
<button onclick="window.print()">Print this page</button>  
  
</body>  
</html>
```
# JavaScript Statement
```js
let x, y, z;    // Statement 1  
x = 5;          // Statement 2  
y = 6;          // Statement 3  
z = x + y;      // Statement 4
```
## JS Programs
A **computer program** is a list of "instructions" to be "executed" by a computer.

In a programming language, these programming instructions are called **statements**.

A **JavaScript program** is a list of programming **statements**.

## JS Statements
JavaScript statements are composed of:

Values, Operators, Expressions, Keywords, and Comments.

This statement tells the browser to write "Hello Dolly." inside an HTML element with id="demo":
```js
document.getElementById("demo").innerHTML = "Hello Dolly.";
```
Most JavaScript programs contain many JavaScript statements.

The statements are executed, one by one, in the same order as they are written.

## Semicolons ;
Semicolons separate JavaScript statements.
```js
let a, b, c;  // Declare 3 variables  
a = 5;        // Assign the value 5 to a  
b = 6;        // Assign the value 6 to b  
c = a + b;    // Assign the sum of a and b to c
```

## JS white spaces
JavaScript ignores multiple spaces. You can add white space to your script to make it more readable.

A good practice is to put spaces around operators ( = + - * / ):
```js
let x = y + z;
```
## JS line length and line breaks
For best readability, programmers often like to avoid code lines longer than 80 characters. Break it after and operator.
```js
document.getElementById("demo").innerHTML =  
"Hello Dolly!";
```

## JS code blocks
JavaScript statements can be grouped together in code blocks, inside curly brackets {...}. The purpose of code blocks is to define statements to be executed together. One place you will find statements grouped together in blocks, is in JavaScript functions:
```js
function myFunction() {  
  document.getElementById("demo1").innerHTML = "Hello Dolly!";  
  document.getElementById("demo2").innerHTML = "How are you?";  
}
```

## JS Keywords
JavaScript statements often start with a **keyword** to identify the JavaScript action to be performed.

Our [Reserved Words Reference](https://www.w3schools.com/js/js_reserved.asp) lists all JavaScript keywords.

Here is a list of some of the keywords you will learn about in this tutorial:
![[Pasted image 20231102172101.png]]

# JS Syntax
JavaScript syntax is the set of rules, how JavaScript programs are constructed:
```js
// How to create variables:  
var x;  
let y;  
  
// How to use variables:  
x = 5;  
y = 6;  
let z = x + y;
```
## JS Values
The JavaScript syntax defines two types of values:

- Fixed values
- Variable values

Fixed values are called **Literals**.

Variable values are called **Variables**.

## JS Literals
The two most important syntax rules for fixed values are:
1. **Numbers** are written with or without decimals:
```js
10.50  
  
1001
```
2. **Strings** are text, written within double or single quotes:
```js
"John Doe"  
  
'John Doe'
```

## JS Variables
In a programming language, **variables** are used to **store** data values. JavaScript uses the keywords `var`, `let` and `const` to **declare** variables. `var` and let are almost the same. The difference is that let is improved var.
An **equal sign** is used to **assign values** to variables.

```js
let x;  
x = 6;
```

## JS Operators
JavaScript uses **arithmetic operators** ( `+` `-` `*` `/` ) to **compute** values:

# JavaScript Variables
## Variables are Containers for Storing Data

JavaScript Variables can be declared in 4 ways:

- Automatically
- Using `var`
- Using `let`
- Using `const`

**Automatic**
```JS
x = 5;  
y = 6;  
z = x + y;
```

**var**
```js
var x = 5;  
var y = 6;  
var z = x + y;
```

**let**
```js
let x = 5;  
let y = 6;  
let z = x + y;
```

**const**
```js
const x = 5;  
const y = 6;  
const z = x + y;
```

## When to use var, let, const
1. Always declare variables

2. Always use `const` if the value should not be changed

3. Always use `const` if the type should not be changed (Arrays and Objects)

4. Only use `let` if you can't use `const`

5. Only use `var` if you MUST support old browsers.

## JS Dollar Sign $
Since JavaScript treats a dollar sign as a letter, identifiers containing $ are valid variable names:
```js
let $ = "Hello World";  
let $$$ = 2;  
let $myMoney = 5;
```
Using the dollar sign is not very common in JavaScript, but professional programmers often use it as an alias for the main function in a JavaScript library.

In the JavaScript library jQuery, for instance, the main function `$` is used to select HTML elements. In jQuery `$("p");` means "select all p elements".

## JS Underscore _
Since JavaScript treats underscore as a letter, identifiers containing _ are valid variable names:
Using the underscore is not very common in JavaScript, but a convention among professional programmers is to use it as an alias for "private (hidden)" variables.

# JavaScript Let and var
## let
Variables defined with `let` cannot be **Redeclared***
```js
let x = "John Doe";  
  
let x = 0;
```

Variables defined with `let` must be **Declared** before use
```js
let x;  
  
let x = 0;
```

```js
let x = 10;  
// Here x is 10  
  
{  
let x = 2;  
// Here x is 2  
}  
  
// Here x is 10
```

```js
let x = 2;   // Allowed  
  
{  
let x = 3;   // Allowed  
}  
  
{  
let x = 4;    // Allowed  
}
```

Variables defined with `let` have **Block Scope**
```js
{  
  let x = 2;  
}  
// x can NOT be used here
```
## var
Variables defined with `var` can be **Redeclared**
```js
var x = "John Doe";  
  
var x = 0;
```

```js
var x = 10;  
// Here x is 10  
  
{  
var x = 2;  
// Here x is 2  
}  
  
// Here x is 2
```

```js
var x = 2;  
// Now x is 2  
  
var x = 3;  
// Now x is 3
```

```js
var x = 2;   // Allowed  
let x = 3;   // Not allowed  
  
{  
let x = 2;   // Allowed  
let x = 3;   // Not allowed  
}  
  
{  
let x = 2;   // Allowed  
var x = 3;   // Not allowed  
}
```
## Difference between var, let, and const
![[Pasted image 20231103184015.png]]

## Let Hoisting
Variables defined with `var` are **hoisted** to the top and can be initialized at any time.

Meaning: You can use the variable before it is declared:
```js
carName = "Volvo";  
var carName;
```
# JavaScript Const
Variables defined with `const` cannot be **Redeclared**
Variables defined with `const` cannot be **Reassigned**
Variables defined with `const` have **Block Scope**
```js
const PI = 1234;
PI = 1234; //Error
PI = PI + 10; //Error
```
## When to use JavaScript const?
**Always declare a variable with `const` when you know that the value should not be changed.**

Use `const` when you declare:

- A new Array
- A new Object
- A new Function
- A new RegExp
## Constant Objects and Arrays
The keyword `const` is a little misleading.
It does not define a constant value. It defines a constant reference to a value.

Because of this you can NOT:
- Reassign a constant value
- Reassign a constant array
- Reassign a constant object

But you CAN:
- Change the elements of constant array
- Change the properties of constant object

## Constant Arrays
You can change the elements of a constant arrays:
```js
// You can create a constant array:
const cars= ["Saab", "Volvo", "BMW"];

//You can change an element
cars[0] = "Toyota";

//You can add an element
cars.push("Audi"); 
```
## Constant Objects
You can change the properties of a constant object:
```js
// Create an object
const car = {type: "Fiat", Model: "500", color: "Black"};

//Change Property
car.color = "Green Jasper";

//Add property
car.owner = "Zedrick Ragas";
```

## Constant Block Scope
Declaring a variable with `const` is similar to `let` when it comes to **Block Scope**.

The x declared in the block, in this example, is not the same as the x declared outside the block:
```js
const x = 10;
//Here, x = 10
{
const x = 2;
//Here, x = 2
}
//Here x = 10
```

## Redeclaring 
Redeclaring a JS `var` variable is allowed anywhere in a program:
```js
var x = 2;     // Allowed  
var x = 3;     // Allowed  
x = 4;         // Allowed
```

Redeclaring an existing `var` or `let` variable to `const`, in the same scope, is not allowed:
```js
var x = 2;     // Allowed  
const x = 2;   // Not allowed  
{  
let x = 2;     // Allowed  
const x = 2;   // Not allowed  
}  
{  
const x = 2;   // Allowed  
const x = 2;   // Not allowed  
}
```

## Hoisting
Variables defined with `const` are also hoisted to the top, but not initialized.

Meaning: Using a `const` variable before it is declared will result in a `ReferenceError`:
```js
//this is wrong 
x = 10;
const x;

//This is correct
const x;
x = 10;
```

# JavaScript Operation
## Types of JavaScript Operators
There are different types of JavaScript operators:

- Arithmetic Operators
- Assignment Operators
- Comparison Operators
- String Operators
- Logical Operators
- Bitwise Operators
- Ternary Operators
- Type Operators
## JS Assignment Operator
![[Pasted image 20231112211504.png]]

```js
const x = 10;
```
## JS Arithmetic Operation 
**Addition**
```js
let x = 10;
let y = 59;

const z = x + y;
```

**Increment**
```js
let x = 10;
x++;
const y = x;
```

**Subtraction**
```js
let x = 10;
let y = 59;

const z = x - y;
```
**Decrement**
```js
let x = 10;
x--;
const y = x;
```

**Multiplication**
```js
let x = 10;
let y = 59;

const z = x * y;
```

**Exponent**
```js
let x = 10;
let y = 59;

const z = x ** y;
```

**Division**
```js
let x = 10;
let y = 59;

const z = x / y;
```

**Modulus**
```js
let x = 10;
let y = 59;

const z = x % y;
```
## JS Comparison Operator
``
`==` - equal to
`===` - equal value and type
`!=` - not equal 
`!==` - not equal value or type
`>` - greater than 
`<` - less than 
`>=` - greater than or equal
`<=` - less than or equal 
`?` - ternary operator
## JS String Comparison
All the comparison operators above can also be used on strings:
Note that strings are compared alphabetically:
## JS String Addition
The `+` can also be used to add (concatenate) strings:
The `+=` assignment operator can also be used to add (concatenate) strings:
```js
let text1 = "What a very ";  
text1 += "nice day";
```

## JS Logical Operators
`&&` - logical and
`||` logical or
`!` - logical not
## JS Type Operator
`typeof` - Returns the type of a variable
`instanceof` - Returns true if an object is an instance of an object type
## JS Bitwise Operators
Bit operators work on 32 bits numbers.
Any numeric operand in the operation is converted into a 32 bit number. The result is converted back to a JavaScript number.
![[Pasted image 20231112215659.png]]

[W3Schools - JS](https://www.w3schools.com/js)
