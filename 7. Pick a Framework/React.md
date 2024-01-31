# What is react?
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
```jsx
function myFunction(props){
	return(`<h1>Name is ${props.name}</h1>`)
}
```

**Stateful Component** are regular `ES6` class that extends component class from the react library. Must render the method returning html.

**Example:**
```jsx
class Welcome extends React.Component{
	render(){
		return(<h1>Hello, (this.props.name)</h1>)
	}
}
```

# Functional Components
Functional components are just JavaScript functions. it can be use as properties or **`props`** and return `.jsx` which describes the UI.

**Example:**
`component.jsx`
```jsx
import React from 'react' // This is a must even if you use it or not

function Component(){
	return(<h1>Hello World!</h1>)
}

export default Component
```

`app.jsx`
```jsx
import React from 'react'
import ComponentOne from './component.jsx'

function App(){
 return (
	 <ComponentOne/>
 )
}

export default App
```

`main.jsx`
```jsx
import React from 'react'
import ReactDOM from 'react-dom/client' // To create root
import App from './App.jsx'
import 'index.css' // To import css file

ReactDOM.createroot
```
This works perfectly but in React, you must use arrow function:

**Example:**
`component.jsx`
```jsx
const Component = () => {
	<h1>My Name is Zedrick</h1>
}
export default Component
```
This is syntax wise.

Another way to export a component:

**Example:**
`component.jsx`
```jsx
import React from 'react'
export const Component = () = {
	<h1>My name is Zedrick</h1>
}
```

`app.jsx`
```jsx
import React from 'react'
import { ComponentOne } from './component.jsx' // Use curly when importing direct export

function App(){
	return(
		<ComponentOne/>
	)
}
export default App
```

# Class Component
Class component is basically `ES6` classes. Similar to functional component, a class component also can optionally receive `props` and and return `html`. A class component can maintain an internal state. It can maintain some information which is private to that component. 

**Example:**
`classComponent.jsx`
```jsx
import React, {Component} from 'react' // It must import 2 librarie from react

class Welcome extends Component{ // It must extend the Component library
	// Must implements render method which returns null or sum html
	render(
		return(<p>Lorem Ipsum</p>)
	)
}

export default Welcome
```

# Functional vs Class components
## Functional
- Simple functions
- Use func components as much as possible
- Absence of "this" keyword
- Solution without using state
- Mainly responsible for the UI
- Stateless/Dumb/Presentational
## Class
- More feature rich
- Maintain their own private data - state
- Complex UI logic
- Provide lifecycle hooks
- Stateful / Smart / Container

# Hook - Update Components
Use makes you use state components without adding a class. So State and code similar to lifecycle hooks which are exclusive to class components can now be use to functional components as well. 

# .JSX
JavaScript XML

# Props (Properties)
Props is the optional input that your component can accept. It also allows the component to be dynamic.

**Example:**
`propsComponent.jsx`
```jsx
import React from 'react'

// This will return object so access the element with dot
const NickName = (props) => { // Add parameter to use the imported variable. Name it props as a default but you can name it anything
	return (
		<h1>My nickname is {props.name} and my hero name is {props.heroName}</h1>
	)
}
export default NickName
```
`App.jsx`
```jsx
import React from 'react'
import PropsComponent from './propsComponent.jsx'

function App(){
	return(
		<PropsComponent name = "Zedo" heroName = "Super Mario"/> {/* To pass a variable, declare it in the component */}
	)
}

export default App
```

## Adding a child element inside a component and accessing it
**Example:**
`propsComponent.jsx`
```jsx
import React from 'react'

// This will return object so access the element with dot
const NickName = (props) => { // Add parameter to use the imported variable. Name it props as a default but you can name it anything
	return (
		<div>
			<h1>My nickname is {props.name}</h1>
			{props.children} {/* Accessing the child element */}
		</div>
	)
}
export default NickName
```
`App.jsx`
```jsx
import React from 'react'
import PropsComponent from './propsComponent.jsx'

function App(){
	return(
		<PropsComponent name = "Greg" heroName = "Super Mario"> {/* Creating a child element */}
			<p>Greg is from the beach of Buliasnin.</p>
		</propsComponent>
	)
}

export default App
```