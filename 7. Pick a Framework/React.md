**What is react?**
- Open source JS library.
- Focus on UI
- Rich ecosystem
**Component base**

**Reusable code**
Can be use in other framework.

**React is declarative**
Just tell React what you want and React will build the actual UI. unlike imperative, you don't have to tell it how to do it.

**More on React?**
Can be integrated in other application. It doesn't matter if whole page or not.
React native for mobile application.

**Prerequisites:**
Sample codes are in the JS Sandbox.
`this`
`filter` - `array.filter(function(currentValue, index, arr), thisValue)`
`map` - `array.map(function(currentValue, index, arr), thisValue)`
`reduce` - `array.reduce(function(total, currentValue, currentIndex, arr), initialValue)` 

# Folder Structure
Folder structure in `React.js` is hierarchical. 
# React Components
You can create multiple components in react for each panel. `root` element in `index.html` imports the `main.jsx` in react. `app.jsx` is the main component and all of the other component is imported into it. The `app.jsx` is imported in `main.jsx`. There are two types of components in react: **Stateless Component** and **Stateful Component**.  
**Stateless Component** is a normal JavaScript codes. Assume that we are returning basic html elements. 

**Example:**
```js
function myFunction(props){
	return(`<h1>Name is ${props.name}</h1>`)
}
```

**Stateful Component** are regular `ES6` class that extends component class from the react library. Must render the method returning html.

**Example:**
```js
class Welcome extends React.Component{
	render(){
		return(<h1>Hello, (this.props.name)</h1>)
	}
}
```