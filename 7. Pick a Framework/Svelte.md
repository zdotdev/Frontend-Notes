# Svelte CSS Design
In svelte, CSS design focus on one `.svelte` file only. If you import other `.svelte` components, the CSS design on your main `.svelte` won't affect the imported component(s).

**`:global(element_here or class){}`** - if you want to use same design for main `.svelte` and components `.svelte`.

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