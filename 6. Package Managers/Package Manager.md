**npm init** or **npm init -y** - This will prompt you with several questions (the defaults are fine, you can hit “Enter” for each question) and generate a new file named **`package.json`**. This is a configuration file that npm uses to save all project information.


# Testing moment in NPM in js
## Installing moment package
**npm i moment** - To install moment package.
Event when the **`moment`** package is installed, we cant use it because if we try to run this JavaScript code, it will throw error about **`require`** variable:
```Js
const moment = require('moment');
console.log(moment().format('yyyy'));
```

To fix that, we have to install a bundler that will make that code readable for the browser. Browserify is one of the bundler that always used:

**npm install -g browserify** - to install browserify.
**npm browserify main.js -o bundle.js** - the **`main.js`** is your js file and it browserify will convert it into bundle.

So now, you have to import the bundle to the html.
```html
<!DOCTYPE html>

<html lang="en">

	<head>
	
	    <meta charset="UTF-8">
	
	    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	
	    <title>npm moment</title>
	
	</head>

<body>

    <script src="bundle.js"></script>

</body>

</html>
```


**Note:** to fix Digitally undefined error in visual studio code, run this -
Use this to show list: `Get-ExecutionPolicy -List`
Use this to bypass execpol: `Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass`
Use this to return it to undefined after`Set-ExecutionPolicy -Scope Process -ExecutionPolicy Undefined`