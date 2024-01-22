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

