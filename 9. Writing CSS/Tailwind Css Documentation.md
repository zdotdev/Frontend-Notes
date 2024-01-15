# Installation 
[Tailwind CSS - Official Website.](https://tailwindcss.com/)

## CLI (without JS Framework)
Install tailwindcss: `npm install -D tailwindcss`

create **tailwind.config.js**: `npx tailwindcss init`
create `package.js`: `npm init -y`

Add the paths to to all of your template files (`.html` file) to your **tailwind.config.js** file:
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Create a separated `.css` file with the name `input.css` in src folder put this code:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Go to terminal again and put this code:
```
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
```
note: you can add this in `package.js` by removing the npx

Import `output.css` in your `.html` file:
ex:
```html
<link href="../dist/output.css" rel="stylesheet">
```
## Postcss (with JS Framework)

Install tailwindcss: `npm install -D tailwindcss postcss autoprefixer`

Create `tailwindcss.config.js`: `npx tailwindcss init`

Add `tailwindcss` and `autoprefixer` to your `postcss.config.js` file, or wherever PostCSS is configured in your project: 
```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}
```

Add the paths to all of your template files in your `tailwind.config.js` file:
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Add the `@tailwind` directives for each of Tailwind’s layers to your main CSS file:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Run your build process with `npm run dev` or whatever command is configured in your `package.json` file:
```
npm run dev
```

Add `main.css` to your `.html` file:
```html
<link href="/dist/main.css" rel="stylesheet">
```

