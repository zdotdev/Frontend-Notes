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

# Guide
**npm init**
**npm install <package_here>**

*Note:* Check if the the .js correct in package.json.
```js
{

  "name": "age-calculator-app-main",

  "version": "1.0.0",

  "description": "![Design preview for the Age calculator app coding challenge](./design/desktop-preview.jpg)",

  "main": "main.js", // Here

  "scripts": {

    "test": "echo \"Error: no test specified\" && exit 1"

  },

  "author": "",

  "license": "ISC"

}
```

If the package is already in the dependencies, you don't have to retype the install like `nmp install moment`, all you have to do is `npm install` because the package.json recognize the package in the dipendencies.

The flag `--save` in installing packages are not required because its purpose is for old version of npm. In the version 5.0.0 and up, the package will be automatically saved in package.json.

Example:
`npm install moment --save` - to save the moment package in the package.json in the older version of npm.

`npm i moment` - for the lates version of npm and it will automatically save the package to the package.json.


To install specific module(s) to your package, all you have to do is specify the module in installation of package.

Example:
`npm i <package_here> <module_here>`


The `--save-dev` flag in npm is used to save packages as development dependencies in the `package.json` file. Development dependencies are the ones that are needed only during the development phase, such as testing frameworks, build tools, and other utilities that are not required for the production deployment of the application.

You only have to use `--save-dev` in development process. If it has to be deployed, all you need is your normal dependencies. So, to install the dependencies that you only need for deployment, the npm command you need is `npm install --production`, it will only install the normal dependencies.

To uninstall dependencies, the npm command is `npm uninstall <package_here> --save-dev` or the specific dependency module(s) `npm uninstall <package_here> <module_here> --save-dev`. The shortcut for the command `uninstall` is `un` or `rm`.

To update the package, the command is `npm update <package_here>`

To install global package, the npm command is `npm i <package_here> -g`. To run that package, just type the package name in the terminal.

`npm list` to list node modules.

You can edit the script part in package.json file to to add some commands in the terminal.
Example:
**Tailwind**
```json
{

  "name": "age-calculator-app-main",

  "version": "1.0.0",

  "description": "![Design preview for the Age calculator app coding challenge](./design/desktop-preview.jpg)",

  "main": "main.js", // Here

  "scripts": {

    "test": "echo \"Error: no test specified\" && exit 1",
    "tailwind": "tailwindcss -i ./src/input.css -o ./dist/output.css --watch"

  },

  "author": "",

  "license": "ISC"

}
```
The command is `npm run tailwind`.

But if you declare the command as `start`, you don't have to add the `run` command. The `start` or `test` command is for the production dependencies. You can run the command like this: `npm start`
### Semantic Version
`1.2.3` - The `1` is a major version, it will affect the api because of major changes. The `2` is minor version, it has minor updates and new features and won't affect the api. The `3` is bug fixes.

The caret `^` in version means that it will install the lates minor version of the dependencies. The tilde `~` means it will install the latest patch or the bug fixes. If the version has no symbols, it will install that specific version. But if the version is `*`, it will install the latest version of that package and it is not a good idea.
