[Svelte](https://svelte.dev/docs)
# Svelte CSS Design
In svelte, CSS design focus on one `.svelte` file only. If you import other `.svelte` components, the CSS design on your main `.svelte` won't affect the imported component(s).

**`:global(element_here or className){}`** - if you want to use same design for main `.svelte` and components `.svelte`.

**`@keyframes -global-keyframe_name_here{}`** - to use the keyframe in multiple `.svelte` component.

# Adding data to svelte component
Use `{}` to add the JS variable directly to HTML element:
```html
<script>
	let content = "Hello World!";
	let imageUrl = "image.url.here";
</script>

<h1>{content}</h1>
<img alt="logo" src={imageUrl}>
```

You can also shorthand it if you are using html element attribute as variable name:
```html
<script>
	let content = "Hello World!";
	let src = "image.url.here";
</script>

<h1>{content}</h1>
<img alt="logo" {src}>
```

# Reactivity in svelte
You can call a function easily in svelte:
```html
<script>
	let count = 0;
	function increment(){
		count++;
	}
</script>

<h1>{count}</h1>
<button onclick={increment}>Click me</button>
```

**Assignment:**
Assignment in is a way of declaring a variable value like:
```html
<script>
	let count = 0;
	function increment(){
		// Assignment
		count = 10;
	}
</script>

<h1>{count}</h1>
<button onclick={increment}>Click me</button>
```

**Update:**
Update is changing the value of a variable to the latest value:
```html
<script>
	let count = 0;
	function increment(){
		// Update
		count++;
	}
</script>

<h1>{count}</h1>
<button onclick={increment}>Click me</button>
```

**Updating / Assigning a property:**
Assigning a property is used in objects:
```html
<script>
	const obj{
		count: 0
	}
	function increment(){
		// Updating / Assigning a proper
		obj.count ++;
		// or
		// obj.count = 10;
	}
</script>

<h1>{count}</h1>
<button onclick={increment}>Click me</button>
```

Anything outside this manipulating value is not allowed in Svelte, It will update the value but it wont show in the screen.

# Svelte manipulation(Step by step in creating components and editing components)
If you want to create a component, inside the src folder, create a new folder that will contain the new `component.svelte` component. Then inside it, create a the script and the html tags or components you want to create.

**Example:**
`counter.svelte`
```html
<script>

  let count = 0

  const increment = () => {

    count += 1

  }

</script>

<button on:click={increment}>

  count is {count}

</button>
```

## How to import new components to the index.html
- Create a new component
- Go to `App.svelte`
- On the script tag, add `import EventListener from "./lib/eventListener.svelte";`
- Use the `EventListener` as a tag to add it into your `index.html` file
- Import the `app.svelte` into your `main.js` file. 
`import App from './App.svelte'`
- Create an object containing your `App.svelte`. 
```js
const app = new App({

  target: document.getElementById('app'),

})
```
- Export the `app`. 
`export default app`

## Must add CSS file to the main.js
You must add the `.css` file to your `main.js` to use it. 
`import './app.css'`

## How to import images
```js
import svelteLogo from "./assets/svelte.svg";
```
# Adding event listeners in Svelte
Adding event listeners in Svelte is just like calling function. You must add `:` after `on` in Svelte to use the `onclick` event. **`on:click`**

**Example:**
```html
<script>

  const eventListener = () => {

    console.log("Clicked!");

  };

</script>

  

<h1 on:click={eventListener}>Click Me</h1>

<button on:click={eventListener}>Click me too hehe</button>

<h2

  on:click={() => {

    console.log("na clicked ako!");

  }}

>

  Click me three

</h2>
```

You can also pass event methods inside the elements itself. Just add `|` after the `on:click` function
```js
<script>

  const eventListener = () => {

    console.log("Clicked!");

  };

</script>

  

<h1 on:click | stopPropagation | preventDefault={eventListener}>Click Me</h1>
```
[For eventListener options: ](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

# Reactive Declaration and Statements
First is Reactive Declaration. In reactive declaration,  the dollar label `$:`. Dollar label is like a label in JS for loop, but the usage is different. `$:` always executes when the variable that declared inside it is updated. Like if `let a = 1;` has been incremented `a++;`, the `$: b = a * 2` will be executed and the latest value of `a` will be `4`.

**Example:**
```html
<script>
	let a = 1;

  $: multiply = a * 2;

  function increment() {

    a++;

  }
</script>

<p>Value of a: {a}, Multiplied: {multiply}</p>

<button on:click={increment}>Increment</button>
```

Reactive Statement is just declaring a statement like `console.log()` or any future statements.

**Example:**
```html
<script>
	let a = 1;

  $: multiply = a * 2;
  $: console.log('Multiplied');

  function increment() {
    a++;
  }
</script>

<p>Value of a: {a}, Multiplied: {multiply}</p>

<button on:click={increment}>Increment</button>
```

```html
<script>
	let a = 1;

  $: multiply = a * 2;
  $: calculation = calculate(multiply, 1)

  function increment() {

    a++;

  }

  function calculate(a, b){
	return a + b;
  };

</script>

<p>Value of a: {a}, Multiplied: {multiply}, Value of calculate: {calculation}</p>

<button on:click={increment}>Increment</button>
```

Reactive depends on the value of the dollar label.

The problem in Reactive is when you call the reactive declaration or statement inside the function, the value of the the reactive declaration is outdated.

```html
<script>
	let a = 1;

  $: multiply = a * 2;
  $: calculation = calculate(multiply, 1)

  function increment() {
    a++;
	console.log(multiply);
  }

  function calculate(a, b){
	return a + b;
  };

</script>

<p>Value of a: {a}, Multiplied: {multiply}, Value of calculate: {calculation}</p>

<button on:click={increment}>Increment</button>
```
 Because svelte will run the code starting from the event, next is to the function that will increment the value of a and will console out the multiply which contains the old value, and next is svelte will update the value of multiply, next is the value will be updated to the screen.

# Tick()
To update the reactive declaration inside the function, we must use `tick()` function. We have to import `tick()` from svelte.
```html
<script>
	import { tick } from 'svelte';
	let a = 1;

	$: multiply = a * 2;
	$: calculation = calculate(multiply, 1)

  function increment() {
    a++;
    // Call the tick() function and add the promise
    tick().then(() => {
	    console.log(multiply); 
    })
  }

  function calculate(a, b){
	return a + b;
  };

</script>

<p>Value of a: {a}, Multiplied: {multiply}, Value of calculate: {calculation}</p>

<button on:click={increment}>Increment</button>
```

## Another use of tick:
If you want to select and edit a specific part or letter in `input` in svelte, when you mark shade it and try to add the new text, the text cursor will automatically go back to the end part of the text. But it you use `tick()`, it wont go to the end because you are manipulating the `dom` itself, not the input you type. The `tick()` function will update the `dom` itself. You must use `async await` function because the purpose of it is to wait if or until you modify the `dom`.
**Example:**
```html
<script>

  import { tick } from "svelte";

  let value = "";

  async function toUpper() {
    let input = this;
    let selectionStart = input.selectionStart; // This will keep track of the start of the shaded area of text
    let selectionEnd = input.selectionEnd; // This will keep the track of the end of the shaded area of text
    value = input.value.toUpperCase(); // Ignore the error

    await tick(); // This will wait for the dom to be change or manipulated

    input.selectionStart = selectionStart; // this will handle the start of the shaded area of text and the cursor will stay at that point
    input.selectionEnd = selectionEnd;
  }
</script>
<input type="text" on:input={toUpper} {value} />
```

It can also be use in monitoring scroll position like if you edit or manipulate or update in some area in the html, it will wait for you to finish updating that area before it restore to the specific scroll position.
# Component and props
To import component or props, the first letter of the import name must me capital

**Example:**
```html
<script>
  import Counter from "./lib/Counter.svelte";
  import EventListener from "./lib/eventListener.svelte";
  import InputTest from "./lib/input.svelte";
  let name = "Abdul Jabol";
</script>

<main>
  <div class="card">
    <Counter /> // Component start with Capital letter
    <EventListener />
    <InputTest />
    <h1>{name}</h1> // Elements start with small letter
  </div>
</main>
```

 This is how to past the data from parent to child. It is called `props`.
**Example:**
```html
<script>
  import Component from "./lib/component.svelte";
  let name = "Zedrick";
</script>

<main>
  <div class="card">
    <Component name = {name}/>
    // or
    <Component {name}/>
    // or
    <Component name = "This is name"/>
  </div>
</main>
```

This is the child component:
```html
<script>
export let name;
</script>
<h1>{name}</h1>
```

Passing a default value in `props` is like declaring a variable:

**Example:**
```html
<script>
	export let name = 'Default value here'
</script>

<h1>{name}</h1>
```

This is how to pass multiple props and object to the child:

**Example:**
`app.svelte`
```html
<script>
	import Components from "./lib/component.svelte"
		
	const obj = {
		name: 'Zedo',
		age: 21
	};
	
	let myName = 'Zedrick'
</script>

<Components {myName} {...obj}/> // You can use spread operator here to export all of the object elements

```
`components.svelte`
```html
<script>
	export let myName; // exporting local variable
	export let name; // exporting the name in object
	export let age; //exporting the age in object
</script>

<h1>{myName}</h1>
<h2>{name}</h2>
<p>{age}</p>
```
**Note:** You don't have to export the `obj` itself, just export the object element.
# Component Events
You can pass a function like a `props` in svelte. 

**Example:**
`app.svelte`
```html
<script>
  import ComponentEvent from "./lib/componentEvent.svelte";
  let skillVal;
  function currentSkillInParent(skillCount) {
    skillVal = skillCount;
  }
</script>
<p>{skillVal}</p>
```
`componentEvent.svelte`
```html
<script>
  export let currentSkillInParent;
  let num = 0;
  $: currentSkillInParent(num);
  
  function increment() {
    num++;
  }
  function decrement() {
    if (num > 0) {
      num--;
    }
  }
</script>
<div style="display: flex; justify-content: center; gap: 2rem">
  <button on:click={decrement}>-</button>
  <p>Skill = {num}</p>
  <button on:click={increment}>+</button>
</div>
```

This is how to call the same `component` but ignoring the value of the `currentSkillInParent` function.

**Example:**
```html
<script>
  import ComponentEvent from "./lib/componentEvent.svelte";
  let skillVal;
  function currentSkillInParent(skillCount) {
    skillVal = skillCount;
  }
</script>
<p>{skillVal}</p>
```

Its either you use the if statement:
```html
<script>
  export let currentSkillInParent;
  let num = 0;
  $: if(typeOf currentSkillInParent === "function")
  currentSkillInParent(num);
  
  function increment() {
    num++;
  }
  function decrement() {
    if (num > 0) {
      num--;
    }
  }
</script>
<div style="display: flex; justify-content: center; gap: 2rem">
  <button on:click={decrement}>-</button>
  <p>Skill = {num}</p>
  <button on:click={increment}>+</button>
</div>
```

or use the default value method:
```html
<script>
  export let currentSkillInParent = (event) => {};
  let num = 0;
  $: currentSkillInParent(num);
  
  function increment() {
    num++;
  }
  function decrement() {
    if (num > 0) {
      num--;
    }
  }
</script>
<div style="display: flex; justify-content: center; gap: 2rem">
  <button on:click={decrement}>-</button>
  <p>Skill = {num}</p>
  <button on:click={increment}>+</button>
</div>
```

## Using {createEventDispatcher}
Event dispatcher create a custom event in `component.svelte` so the parent can call that event and use it. It has two parameters, the first param is the `name` of the event and the second is the `data` of that event. It will return an object, the data that we need is in the `datail:` element. The parameter of the function must be `event` to justify the value type.

**Example:**
`app.svelte`
```html
<script>
	import ComponentEvent from "./lib/componentEvent.svelte";
	
	let skillVal = 0;
	function currentSkillInParent (event){
		skillVal = event.detail; // To access the detail in object
	}
</script>

<ComponentEvent on:skillChange ={currentSkillInParent}/> <!-- Creating custom event -->
<p>{skillVal}</p>
```

`component.svelte`
```html
<script>
	import {createEventDispatcher} from "svelte";
	
	let num = 0;
	const dispatcher = createEventDispatcher();
	$: dispatcher("skillChange", num); // declare two params for the name o event and the data to be pass
	function incerement(){
		num++;
	};
	function decrement(){
		if(num > 0){
			num--;
		}
	}
</script>

<button on:click{decrement}>-</button>
<p>{num}</p>
<button on:click{increment}>+</button>
```