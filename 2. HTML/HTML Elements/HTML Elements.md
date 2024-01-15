```html
<Doctype html>

<html lang="en">

<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">

<title>Title here</title>

</head>

<body>

<h1> </h1>

<p> </p>

</body>

</html>
```

# For Google Fonts and Icons
[Icons]([Material Symbols and Icons - Google Fonts](https://fonts.google.com/icons))
[Fonts]([Browse Fonts - Google Fonts](https://fonts.google.com/))
# a
Creates a **link** to a URL: a webpage, a section within a page, an email address. Also called anchor element, where the `a` comes from.
```HTML
<a href="https://youtube.com">Click me!</a>
```

sub elements you can use:
[[href]]
[[target]]
[[rel]]
# abbr
Defines an **abbreviation**, and usually includes it full description.

sub elements you can use:
[[title]]
# address
Defines a block of contact info
```HTML
<address>
Infinite Loop,<br>
Cupertino, CA<br>
95014, US
</address>
```

# area
Defines an interactive area within a `map`.
```HTML

<img src="/images/world-continents.png" width="320" height="160" orgwidth="320" orgheight="160" usemap="#world-continents">
<map name="world-continents">
  <area title="North America" href="https://en.wikipedia.org/wiki/North_America" shape="poly" coords="48,89,67,69,77,49,140,0,68,0,6,10,4,31,16,69">
  <area title="South America" href="https://en.wikipedia.org/wiki/South_America" shape="poly" coords="48,88,61,74,119,99,95,160,66,159">
  <area title="Europe" href="https://en.wikipedia.org/wiki/Europe" shape="poly" coords="124,49,145,46,158,50,187,43,198,6,146,1,115,21">
  <area title="Africa" href="https://en.wikipedia.org/wiki/Africa" shape="poly" coords="121,53,140,47,169,51,186,77,196,80,188,137,156,136,138,97,118,86">
  <area title="Asia" href="https://en.wikipedia.org/wiki/Asia" shape="poly" coords="166,50,184,77,201,74,215,91,258,108,263,87,283,74,297,8,192,3,191,29,187,46,170,42">
  <area title="Australia" href="https://en.wikipedia.org/wiki/Australia_(continent)" shape="poly" coords="257,107,263,85,314,89,316,137,294,151,249,132,248,114">
</map>
```

sub elements you can use:

[[title]]
[[shape]]
[[coords]]
[[href]]
[[target]]

# article
Define a **self-contained** block of content that can exist in any context. It can have its own header, footer, section. Useful for a list of blog post.

```html
<article>
  <header>
    <h3>
      <a href="/my-blog-post">My blog post</a>
    </h3>
  </header>
  <section>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis.</p>
  </section>
  <footer>
    <small>
      Posted on <time datetime="2017-04-29T19:00">Apr 29</time> in <a href="/category/code">Code</a>
    </small>
  </footer>
</article>
```

# aside
Defines a block of content that is related to the main content. Displayed as a sidebar usually.

```html
<main>
  <h1>My blog post</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis.</p>
  <p>etc.</p>
</main>

<aside>
  <h3>About the author</h3>
  <p>Frontend Designer from Bordeaux, currently working for Improbable in sunny London.</p>
</aside>
```
# audio
Allows to embed an audio clip into a webpage.

```html
<audio src="/assets/Hal.mp3" controls></audio>
```

sub elements you can use:

[[src]]
[[volume]]
[[autoplay]]
[[controls]]
[[loop]]
[[muted]]
[[preload]]

# b
Makes an element **bold**.

```html
Hello <b>World</b>
```
# base
Defines the URL for all **relative** links of a web page. Should be placed in the `<head>`.

```html
<base href="https://htmlreference.io">
<a href="/element/base">The HTML base element</a>
<!-- This will be an absolute link to https://htmlreference.io/element/base -->
```

sub elements you can use:

[[href]]
[[target]]

# bdi
Allows to display part of a text in the *opposite* direction. Stands for `bidirectional isolation`.

```html
The word <bdi>مرحبا</bdi> means "Hello" in Arabic
```
# bdo
Allows to override the direction of text.

```html
The word <bdo dir="rtl">Hello</bdo> is "Hello" spelled backwards.
```

[[dir]]
# blockqoute
Defines a **long quatation**.

```html
<blockquote cite="https://en.wikiquote.org/wiki/Marie_Curie">
  Be less curious about people and more curious about ideas.
</blockquote>
```

[[cite]]
# body
The container for a web page's content. Must be a direct child of `<html>`, and must be an ancestor of all HTML elements(except where noted). 

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- Document metadata -->
  </head>
  <body>
    <!-- Document content -->
  </body>
</html>
```
# br
Defines a **line break** within a text.

```html
Lorem ipsum dolor sit<br>amet, consectetur adipiscing elit. Donec viverra<br>nec<br>nulla vitae mollis.
```
# button
Defines a clickable **button**.

```html
<button>
  Submit form
</button>
```

sub elements you can use:
[[name]]
[[value]]
[[type]]
[[disabled]]
[[autofocus]]
# canvas
Defines an element where you can draw **graphics**.

```html
<canvas>
  Fallback text for non-supported browsers
</canvas>
```

[[height]]
[[width]]
# caption
Defines the title of a `<table>`.

```html
<table>
  <caption>The Beatles</caption>
  <tr>
    <td>John Lennon</td>
    <td>Rhythm Guitar</td>
  </tr>
  <tr>
    <td>Paul McCartney</td>
    <td>Bass</td>
  </tr>
  <tr>
    <td>George Harrison</td>
    <td>Lead Guitar</td>
  </tr>
  <tr>
    <td>Ringo Starr</td>
    <td>Drums</td>
  </tr>
</table>
```
# cite
Defines the source of a creative work.

```html
If you want to learn HTML and CSS, go read <cite>MarkSheet.io</cite>!
```
# code
Defines a snippet of **code** within a block of text.

```html
Type <code>npm install</code> in your terminal to install a project's dependencies.
```
# col
Defines a **column** within a table.

```html
<table>
  <colgroup>
    <col style="background-color: hotpink;">
    <col span="2" style="background-color: springgreen;">
  </colgroup>
  <tr>
    <td>John Lennon</td>
    <td>Rhythm Guitar</td>
    <td>1960–1969</td>
  </tr>
  <tr>
    <td>Paul McCartney</td>
    <td>Bass</td>
    <td>1960–1970</td>
  </tr>
  <tr>
    <td>George Harrison</td>
    <td>Lead Guitar</td>
    <td>1960–1970</td>
  </tr>
  <tr>
    <td>Ringo Starr</td>
    <td>Drums</td>
    <td>1960–1970</td>
  </tr>
</table>
```

sub elements you can use;
[[span]]
# colgroup
Defines a group of **columns** within a table.

```html
<table>
  <colgroup>
    <col style="background-color: hotpink;">
    <col span="2" style="background-color: springgreen;">
  </colgroup>
  <tr>
    <td>John Lennon</td>
    <td>Rhythm Guitar</td>
    <td>1960–1969</td>
  </tr>
  <tr>
    <td>Paul McCartney</td>
    <td>Bass</td>
    <td>1960–1970</td>
  </tr>
  <tr>
    <td>George Harrison</td>
    <td>Lead Guitar</td>
    <td>1960–1970</td>
  </tr>
  <tr>
    <td>Ringo Starr</td>
    <td>Drums</td>
    <td>1960–1970</td>
  </tr>
</table>
```
# data
Defines content linked to machine-readable output.

```html
<p>Computers</p>
<ul>
  <li>
    <data value="499">Mini PC</data>
  </li>
  <li>
    <data value="899">Small laptop</data>
  </li>
  <li>
    <data value="1399">Large laptop</data>
  </li>
  <li>
    <data value="2099">Desktop PC</data>
  </li>
</ul>
```

sub element you can use:
[[value]]
# datalist
Defines a list of **autocomplete option** when using a text `input`.

```html
<label>South American countries</label><br>
<input list="countries" placeholder="Type a country">

<datalist id="countries">
  <option value="Argentina">
  <option value="Bolivia">
  <option value="Brazil">
  <option value="Chile">
  <option value="Colombia">
  <option value="Ecuador">
  <option value="Guyana">
  <option value="Paraguay">
  <option value="Peru">
  <option value="Suriname">
  <option value="Uruguay">
  <option value="Venezuela">
</datalist>
```
# dd
Defines an item in a **definition list**.

```html
<dl>
  <dt>Web</dt>
  <dd>The part of the Internet that contains websites and web pages</dd>
  <dt>HTML</dt>
  <dd>A markup language for creating web pages</dd>
  <dt>CSS</dt>
  <dd>A technology to make HTML look better</dd>
</dl>
```
# del
Defines text that has been **deleted**.

```html
To write abbreviations, use the <del cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/acronym">acronym</del> <ins>abbr</ins> HTML element.
```

sub elements you can use;
[[cite]]
[[datetime]]
# details
Defines a toggable block of content with a summary and additional details.

```html
<details>
  <summary>Read more</summary>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis.</p>
</details>
```

sub elements you can use;
[[open]]
# dfn
Defines where a term is **defined** within a webpage.

```html
The <dfn>World Wide Web</dfn> is the part of the Internet that uses the HTTP protocol.
```
# dialog (Experimental)
Defines a **dialog box** that can be opened and closed with JavaScript.

```html
<dialog>
  This is a dialog box!
</dialog>
```

[[open]]
# div
Defines a **generic block** of content, that does not carry any semantic value. Used for layout elements like containers.
# dl
Defines a **definition list**.

```html
<dl>
  <dt>Web</dt>
  <dd>The part of the Internet that contains websites and web pages</dd>
  <dt>HTML</dt>
  <dd>A markup language for creating web pages</dd>
  <dt>CSS</dt>
  <dd>A technology to make HTML look better</dd>
</dl>
```
# dt
Defines a **definition term**.

```html
<dl>
  <dt>Web</dt>
  <dd>The part of the Internet that contains websites and web pages</dd>
  <dt>HTML</dt>
  <dd>A markup language for creating web pages</dd>
  <dt>CSS</dt>
  <dd>A technology to make HTML look better</dd>
</dl>
```
# em
Defines **emphasis** on text. Is usually rendered as *Italic* text.

```html
HTML should only be used to write <em>content</em>, and keep CSS for <em>styling</em> the web page.
```
# embed
Defines a container for **external application**.

```html
<embed src="https://www.youtube.com/embed/kmk43_2dtn0" width="640" height="480">
```

[[src]]
[[type]]
[[height]]
[[width]]
# fieldset
Defines a **group of controls** within a form.

```html
<form action="/subscribe" method="post">
  <fieldset>
    <legend>Subscribe to the Newsletter</legend>
    <input type="email" name="email">
    <button>Ok</button>
  </fieldset>
</form>
```

[[disabled]]
# figcaption
Defines the **caption** of a `figure`.

```html
<figure>
  <img src="/images/html-reference-logo.png" alt="HTML Reference logo">
  <figcaption>The HTML Reference logo</figcaption>
</figure>
```
# figure
Defines a single-self-centered element, usually an image.

```html
<figure>
  <img src="/images/html-reference-logo.png" alt="HTML Reference logo">
</figure>
```
# footer
Defined the footer of a web page or section.

```html
<footer>
  HTML Reference - A free reference to all HTML5 elements and attributes
</footer>
```
# form
Defines an **interactive form** with control.

```html
<form action="/signup" method="post">
  <p>
    <label>Title</label><br>
    <label>
      <input type="radio" name="title" value="mr">
      Mr
    </label>
    <label>
      <input type="radio" name="title" value="mrs">
      Mrs
    </label>
    <label>
      <input type="radio" name="title" value="miss">
      Miss
    </label>
  </p>
  <p>
    <label>First name</label><br>
    <input type="text" name="first_name">
  </p>
  <p>
    <label>Last name</label><br>
    <input type="text" name="last_name">
  </p>
  <p>
    <label>Email</label><br>
    <input type="email" name="email" required>
  </p>
  <p>
    <label>Phone number</label><br>
    <input type="tel" name="phone">
  </p>
  <p>
    <label>Password</label><br>
    <input type="password" name="password">
  </p>
  <p>
    <label>Country</label><br>
    <select>
      <option>China</option>
      <option>India</option>
      <option>United States</option>
      <option>Indonesia</option>
      <option>Brazil</option>
    </select>
  </p>
  <p>
    <label>
      <input type="checkbox" value="terms">
      I agree to the <a href="/terms">terms and conditions</a>
    </label>
  </p>
  <p>
    <button>Sign up</button>
    <button type="reset">Reset form</button>
  </p>
</form>
```

[[action]]
[[method]]
[[name]]
[[autocomplete]]
[[target]]
[[enctype]]
[[novalidat]]
# h1
Defines a section heading of level **one**: the highest level.

```html
<h1>My blog post</h1>
```
# h2
Defines a section heading of level **two**.

```html
<h1>My blog post</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis.</p>
<h2>Introduction</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis.</p>
```
# h3
Defines a section heading of level **three**.
```html
<h1>My blog post</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis.</p>
<h2>Introduction</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis.</p>
<h3>Example</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis.</p>
```
# h4
Defines a section heading of level **four**.

```html
<h1>My blog post</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis.</p>
<h2>Introduction</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis.</p>
<h3>Example</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis.</p>
<h4>Why</h4>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis.</p>
```
# h5
defines a section heading of level **five**.

```html
<h1>My blog post</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis.</p>
<h2>Introduction</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis.</p>
<h3>Example</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis.</p>
<h4>Why</h4>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis.</p>
<h5>Reason</h5>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis.</p>
```
# h6
Defines a section heading of level **six**: the lowest level.

```html
<h1>My blog post</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis.</p>
<h2>Introduction</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis.</p>
<h3>Example</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis.</p>
<h4>Why</h4>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis.</p>
<h5>Reason</h5>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis.</p>
<h6>Focus</h6>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis.</p>
```
# head
Defines a container for a web page's **metadata**.

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- Document metadata -->
  </head>
  <body>
    <!-- Document content -->
  </body>
</html>
```
# header
Defines the **header** of a web page or section.

```html
<header>
  <h1>HTML Reference</h1>
  <nav>
    <a>Home</a>
    <a>About</a>
    <a>Contact</a>
  </nav>
</header>
```
# hgroup (Experimental)
Defines the heading of a section. It can only contain heading levels: `<h1><h2><h3><h4><h5><h6>`.

```html
<hgroup>
  <h1>HTML Reference</h1>
  <h2>A free guide to all HTML elements and attributes.</h2>
</hgroup>
```
# hr
Defines a **semantic break** between blocks of text. It is often represented as a **horizontal rule**.

```html
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis.</p>

<hr>

<h2>Next section</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis.</p>
```
# html
Defines the **root element** of an HTML document. All other elements must be contained within this root.

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- Document metadata -->
  </head>
  <body>
    <!-- Document content -->
  </body>
</html>
```
# i
Makes an element **italic**.

```html
Hello <i>World</i>
```
# iframe
defines a container for a nested browsing context: you can include a web page *within* another web page.

```html
<iframe src="https://cssreference.io">
  Fallback text for non-supported browsers
</iframe>
```

[[src]]
[[allowfullscreen]]
[[height]]
[[width]]
# img
Defines an image inserted in the web page.

```html
<img src="/images/sunset.jpg" alt="Picture of a Ha Long Bay sunset">
```

```html
<!-- For responsive images, use srcset and sizes -->

<img src="/images/sunset-360.jpg"
  alt="Picture of a Ha Long Bay sunset"
  srcset="/images/sunset-360.jpg 360w,
          /images/sunset-720.jpg 720w,
          /images/sunset-1440.jpg 1440w>"
  sizes="(min-width: 800px) 720px, 360px">
```

[[src]]
[[alt]]
[[srcset]]
[[sizes]]
[[height]]
[[width]]
# input
Defines an **interactive control** within a web form.

```html
<input type="text" name="first_name" placeholder="e.g. Alex">
```

[[type]]
[[name]]
[[placeholder]]
[[required]]
[[disabled]]
# ins
Defines text that has been **inserted**.

```html
To write abbreviations, use the <del cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/acronym">acronym</del> <ins>abbr</ins> HTML element.
```

[[cite]]
[[datetime]]
# kbd
Defines a snippet of **user input**.

```html
To save, press <kbd>Ctrl + S</kbd>.
```
# label
Defines a **label** for a form control.

textbox:
```html
<label for="first_name">First name</label>
<br>
<input type="text" name="first_name" id="first_name">
```

checkbox:
```html
<label>
  <input type="checkbox" name="terms">
  I agree to the terms
</label>
```

radiobutton:
```html
<p>Subscribe to the newsletter?</p>
<label>
  <input type="radio" name="newsletter" value="yes"> Yes
</label>
<label>
  <input type="radio" name="newsletter" value="no"> No
</label>
```

[[for]]
# legend
defines a **caption** for a parent's content.

```html
<form action="/subscribe" method="post">
  <fieldset>
    <legend>Subscribe to the Newsletter</legend>
    <input type="email" name="email">
    <button>Ok</button>
  </fieldset>
</form>
```
# li
Defines a lit item within an ordered list `<ol>` or unordered list `<ol>`.

ordered list:
```html
<ol>
  <li>Step one</li>
  <li>Step two</li>
  <li>????</li>
  <li>PROFIT!!!</li>
</ol>
```

unordered list:
```html
<p>My shopping list:</p>
<ul>
  <li>Milk</li>
  <li>Bread</li>
  <li>Chocolate</li>
  <li>More chocolate</li>
</ul>
```
# link
Defines a **link** between the current web page and an external link or resources.

```html
<link rel="stylesheet" type="text/css" href="https://htmlreference.io/css/website.css">
```

[[href]]
[[rel]]
# main
Defines the **main content** of a webpage. Can be displayed with a  sidebar.

```html
<main>
  <h1>My blog post</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis.</p>
  <p>etc.</p>
</main>

<aside>
  <h3>About the author</h3>
  <p>Frontend Designer from Bordeaux, currently working for Improbable in sunny London.</p>
</aside>
```
# map
Defines an **interactive map** over an image.

```html
<img src="/images/world-continents.png" width="320" height="160" orgwidth="320" orgheight="160" usemap="#world-continents">
<map name="world-continents">
  <area title="North America" href="https://en.wikipedia.org/wiki/North_America" shape="poly" coords="48,89,67,69,77,49,140,0,68,0,6,10,4,31,16,69">
  <area title="South America" href="https://en.wikipedia.org/wiki/South_America" shape="poly" coords="48,88,61,74,119,99,95,160,66,159">
  <area title="Europe" href="https://en.wikipedia.org/wiki/Europe" shape="poly" coords="124,49,145,46,158,50,187,43,198,6,146,1,115,21">
  <area title="Africa" href="https://en.wikipedia.org/wiki/Africa" shape="poly" coords="121,53,140,47,169,51,186,77,196,80,188,137,156,136,138,97,118,86">
  <area title="Asia" href="https://en.wikipedia.org/wiki/Asia" shape="poly" coords="166,50,184,77,201,74,215,91,258,108,263,87,283,74,297,8,192,3,191,29,187,46,170,42">
  <area title="Australia" href="https://en.wikipedia.org/wiki/Australia_(continent)" shape="poly" coords="257,107,263,85,314,89,316,137,294,151,249,132,248,114">
</map>
```

[[name]]
# mark
Defines **highlighted text**.

```html
We use HTML5 to write <mark>content</mark> on the Web.
```
# meta
Defines metadata attached to a web page.

```html
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="theme-color" content="#ffffff">
```

```html
<!-- Refresh the page every 5 seconds -->
<meta http-equiv="refresh" content="5">
```

```html
<!-- Redirect instantly to https://cssreference.io -->
<meta http-equiv="refresh" content="0; url=https://cssreference.io">
```

[[charset]]
[[http-equiv]]
[[name]]
[[content]]
# meter
Defines a **horizontal meter**.

```html
<meter value="0.7">Progress</meter>
```

```html
<meter min="0" low="16" value="71" high="92" max="100">Alex</meter><br>
<meter min="0" low="16" value="16" high="92" max="100">Brandon</meter><br>
<meter min="0" low="16" value="40" high="92" max="100">Charlotte</meter><br>
<meter min="0" low="16" value="92" high="92" max="100">Sam</meter>
```

[[value]]
[[max]]
[[min]]
[[low]]
[[high]]
# nav
defines a section with **navigation links**.

```html
<nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/contact">Contact</a>
  </nav>
```
# noframes
defines content displayed when the browser does not support **frames**.

```html
<frameset cols="50%, 50%">
  <frame src="https://htmlreference.io/element/frameset">
  <frame src="https://htmlreference.io/element/frame">
  <noframes>This browser does not support framesets.</noframes>
</frameset>
```
# noscript
Defines content displayed when the browser does not have **JavaScript**.

```html
<noscript>Please enable JavaScript.</noscript>
```

```html
<noscript>
  <style type="text/css">
    .no-js {
      display: block;
    }
  </style>
</noscript>
```
# object
Defines a container for **external resource**.

```html
<object type="application/x-shockwave-flash" data="/assets/golf.swf" width="800" height="360">
  <param name="movie" value="/assets/golf.swf">
  <param name="wmode" value="transparent">
  <p>You need to enable Flash to view this content.</p>
</object>
```

[[data]]
[[type]]
[[height]]
[[width]]
# ol
defines an **ordered list**.

```html
<ol>
  <li>Step one</li>
  <li>Step two</li>
  <li>????</li>
  <li>PROFIT!!!</li>
</ol>
```

[[type]]
[[start]]
[[reversed]]
# optgroup
Defines a group of `<option>` elements.

```html
<select>
  <optgroup label="South America">
    <option>Uruguay</option>
    <option>Brazil</option>
    <option>Argentina</option>
  </optgroup>
  <optgroup label="Europe">
    <option>Italy</option>
    <option>Germany</option>
    <option>England</option>
    <option>France</option>
    <option>Spain</option>
  </optgroup>
</select>
```

```html
<select>
  <optgroup label="Winter">
    <option>December</option>
    <option>January</option>
    <option>February</option>
    <option>March</option>
  </optgroup>
  <optgroup label="Not winter" disabled>
    <option>April</option>
    <option>May</option>
    <option>June</option>
    <option>July</option>
    <option>August</option>
    <option>September</option>
    <option>October</option>
    <option>November</option>
  </optgroup>
</select>
```

[[label]]
[[disabled]]
# option
Defines an option within a `<select>` dropdown.

```html
<select name="country">
  <option value="Argentina">Argentina</option>
  <option value="Bolivia">Bolivia</option>
  <option value="Brazil">Brazil</option>
  <option value="Chile">Chile</option>
  <option value="Colombia">Colombia</option>
  <option value="Ecuador">Ecuador</option>
  <option value="Guyana">Guyana</option>
  <option value="Paraguay">Paraguay</option>
  <option value="Peru">Peru</option>
  <option value="Suriname">Suriname</option>
  <option value="Uruguay">Uruguay</option>
  <option value="Venezuela">Venezuela</option>
</select>
```

[[value]]
[[label]]
[[disabled]]
[[selected]]

# output
Defines the result of a calculator or of user action.

```html
<form oninput="sum.value = parseInt(a.value) + parseInt(b.value)">
  <input type="number" name="a" value="4">
  +
  <input type="number" name="b" value="7">
  =
  <output name="sum">11</output>
</form>
```

[[name]]
# p
Defines a simple **paragraph** of text.

```html
<p>Hello World</p>
```

```html
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis.</p>
```
# param
Defines a parameter for an `<object>` element.

```html
<object type="application/x-shockwave-flash" data="/assets/golf.swf" width="800" height="360">
  <param name="movie" value="/assets/golf.swf">
  <param name="wmode" value="transparent">
  <p>You need to enable Flash to view this content.</p>
</object>
```

[[name]]
[[value]]
# picture (Experimental)
defines a container for **sources** of an `<img>` elements.

```html
<picture>
 <source
  media="(min-width: 800px)"
  srcset="/images/sunset-360.jpg 360w,
          /images/sunset-720.jpg 720w,
          /images/sunset-1440.jpg 1440w"
  sizes="33.3vw">
 <source
  srcset="/images/sunset-720.jpg 2x,
          /images/sunset-360.jpg 1x">
 <img src="/images/sunset.jpg" alt="Picture of a Ha Long Bay sunset">
</picture>
```
# pre
Defines **preformatted** text.

```html
<pre>&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Hello World&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis.&lt;/p&gt;
  &lt;/body&gt;
&lt;/html&gt;</pre>
```
# progress
Defines a **progress ba**.

```html
<progress value="0.7">Progress</progress>
```

```html
<progress value="71" max="100">Alex</progress><br>
<progress value="16" max="100">Brandon</progress><br>
<progress value="40" max="100">Charlotte</progress><br>
<progress value="92" max="100">Sam</progress>
```

[[value]]
[[max]]
# q
Defines a **short  quotation**.

```html
He looks around and says <q cite="https://en.wikiquote.org/wiki/The_Terminator">I'll be back</q>.
```

[[cite]]
# rp
Defines content displayed when the browser does not support the `<ruby>` element.

```html
<ruby>
  漢 <rp>(</rp><rt>Kan</rt><rp>)</rp>
  字 <rp>(</rp><rt>ji</rt><rp>)</rp>
</ruby>
```
# rt
Defines the **pronunciation** of ruby annotations.

```html
<ruby>
  漢 <rp>(</rp><rt>Kan</rt><rp>)</rp>
  字 <rp>(</rp><rt>ji</rt><rp>)</rp>
</ruby>
```
# rtc
Defines a text container within ruby annotations.

```html
<ruby>
   <rb>旧</rb>
   <rb>金</rb>
   <rb>山</rb>
   <rt>jiù</rt>
   <rt>jīn</rt>
   <rt>shān</rt>
   <rtc>San Francisco</rtc>
</ruby>
```
# ruby
Defines a **ruby annotation** to show the pronunciation of East Asian characters.

```html
<ruby>
  漢 <rp>(</rp><rt>Kan</rt><rp>)</rp>
  字 <rp>(</rp><rt>ji</rt><rp>)</rp>
</ruby>
```
# s
Defines **strikethrough text**.

```html
Alex is <s>37</s> 38 years old.
```
# samp
Defines a sample output from a computer program.

```html
I entered <code>git push</code> and the terminal printed out <samp>Everything up-to-date</samp>.
```
# script
Defines a  container for an **external script**.

```html
<script src="https://htmlreference.io/javascript/my-scripts.js"></script>
```

```html
<script type="text/javascript">
  console.log('Hello World');
</script>
```

[[src]]
[[type]]
[[async]]
# section
Defines a **section** within a web page.

```html
<section>
  <h2>Section title</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis.</p>
</section>
```
# select
Defines a select dropdown with different `<option>` elements.

```html
<select name="country">
  <option value="Argentina">Argentina</option>
  <option value="Bolivia">Bolivia</option>
  <option value="Brazil">Brazil</option>
  <option value="Chile">Chile</option>
  <option value="Colombia">Colombia</option>
  <option value="Ecuador">Ecuador</option>
  <option value="Guyana">Guyana</option>
  <option value="Paraguay">Paraguay</option>
  <option value="Peru">Peru</option>
  <option value="Suriname">Suriname</option>
  <option value="Uruguay">Uruguay</option>
  <option value="Venezuela">Venezuela</option>
</select>
```

[[name]]
[[size]]
[[multiple]]
[[autofocus]]
[[disabled]]
[[required]]
# slot (Experimental)
Defines a container for **user markup**.
# small
Defines **small print**, for less important content. 

```html
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis.</p>
<small>Posted on <time datetime="2017-04-29T19:00">Apr 29</time> in <a href="/category/code">Code</a></small>
```
# source
Defines a source of an `<audio>`, `<video>`, or `<picture>` element.

```html
<picture>
 <source
  media="(min-width: 800px)"
  srcset="/images/sunset-360.jpg 360w,
          /images/sunset-720.jpg 720w,
          /images/sunset-1440.jpg 1440w"
  sizes="33.3vw">
 <source
  srcset="/images/sunset-720.jpg 2x,
          /images/sunset-360.jpg 1x">
 <img src="/images/sunset.jpg" alt="Picture of a Ha Long Bay sunset">
</picture>
```

[[src]]
[[srcset]]
[[sizes]]
[[type]]
[[media]]
# span
Defines a **generic inline** container of content, that does not carry any semantic value.
# strong
Defines **strong importance** on text.

```html
HTML should only be used to write <strong>content</strong>, and keep CSS for <strong>styling</strong> the web page.
```
# style
Defines a container to add CSS within a web page.

```html
<style type="text/css">
  .important {
    color: red;
  }
</style>
```

[[type]]
# sub
Defines text that should be displayed **lower**.

```html
The formula of carbon dioxide is CO<sub>2</sub>.
```
# summary
Defines the summary of a `<details>` elements.

```html
<details>
  <summary>Read more</summary>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis.</p>
</details>
```
# sup
Defines text that should be displayed **higher** (exponent).

```html
The "power of two" is 2<sup>n</sup> where n is an integer.
```
# table
Defines a container for **tabular data**.

```html
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Instrument</th>
    </tr>
  </thead>
  <tfoot>
    <tr>
      <th>Name</th>
      <th>Instrument</th>
    </tr>
  </tfoot>
  <tbody>
    <tr>
      <td>John Lennon</td>
      <td>Rhythm Guitar</td>
    </tr>
    <tr>
      <td>Paul McCartney</td>
      <td>Bass</td>
    </tr>
    <tr>
      <td>George Harrison</td>
      <td>Lead Guitar</td>
    </tr>
    <tr>
      <td>Ringo Starr</td>
      <td>Drums</td>
    </tr>
  </tbody>
</table>
```
# tbody
Defines a group of table rows `<tr>`.

```html
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Instrument</th>
    </tr>
  </thead>
  <tfoot>
    <tr>
      <th>Name</th>
      <th>Instrument</th>
    </tr>
  </tfoot>
  <tbody>
    <tr>
      <td>John Lennon</td>
      <td>Rhythm Guitar</td>
    </tr>
    <tr>
      <td>Paul McCartney</td>
      <td>Bass</td>
    </tr>
    <tr>
      <td>George Harrison</td>
      <td>Lead Guitar</td>
    </tr>
    <tr>
      <td>Ringo Starr</td>
      <td>Drums</td>
    </tr>
  </tbody>
</table>
```
# td
Defines a **table cell**. Must be a direct child of a `<tr>`.

```html
<table>
  <thead>
    <tr>
      <th colspan="4">World Cup winners</th>
    </tr>
    <tr>
      <td colspan="2">Location</td>
      <td colspan="2">Score</td>
    </tr>
    <tr>
      <td>Continent</td>
      <td>Country</td>
      <td>First</td>
      <td>Total</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="3">South America</td>
      <td>Uruguay</td>
      <td>1930</td>
      <td>2</td>
    </tr>
    <tr>
      <td>Brazil</td>
      <td>1958</td>
      <td>5</td>
    </tr>
    <tr>
      <td>Argentina</td>
      <td>1978</td>
      <td>2</td>
    </tr>
    <tr>
      <td rowspan="5">Europe</td>
      <td>Italy</td>
      <td>1934</td>
      <td>4</td>
    </tr>
    <tr>
      <td>Germany</td>
      <td>1954</td>
      <td>4</td>
    </tr>
    <tr>
      <td>England</td>
      <td>1966</td>
      <td>1</td>
    </tr>
    <tr>
      <td>France</td>
      <td>1998</td>
      <td>1</td>
    </tr>
    <tr>
      <td>Spain</td>
      <td>2010</td>
      <td>1</td>
    </tr>
  </tbody>
</table>
```

[[colspan]]
[[rowspan]]
# template (Experimental)
Defines a placeholder for content that can be displayed using JavaScript.
# textarea
Defines a **multi-line text control** within a web form.

[[name]]
[[autocomplete]]
[[minlength]]
[[maxlength]]
[[placeholder]]
[[cols]]
[[rows]]
[[wrap]]
[[disabled]]
[[required]]
[[autofocus]]
[[readonly]]
[[spellcheck]]
# tfoot
Defines a group of **table rows** `<tr>` at the end of a `<table>`.

```html
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Instrument</th>
    </tr>
  </thead>
  <tfoot>
    <tr>
      <th>Name</th>
      <th>Instrument</th>
    </tr>
  </tfoot>
  <tbody>
    <tr>
      <td>John Lennon</td>
      <td>Rhythm Guitar</td>
    </tr>
    <tr>
      <td>Paul McCartney</td>
      <td>Bass</td>
    </tr>
    <tr>
      <td>George Harrison</td>
      <td>Lead Guitar</td>
    </tr>
    <tr>
      <td>Ringo Starr</td>
      <td>Drums</td>
    </tr>
  </tbody>
</table>
```
# th
Defines a **table header**. Must be a direct child of a `<tr>`.

```html
<table>
  <thead>
    <tr>
      <th colspan="4">World Cup winners</th>
    </tr>
    <tr>
      <td colspan="2">Location</td>
      <td colspan="2">Score</td>
    </tr>
    <tr>
      <td>Continent</td>
      <td>Country</td>
      <td>First</td>
      <td>Total</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="3">South America</td>
      <td>Uruguay</td>
      <td>1930</td>
      <td>2</td>
    </tr>
    <tr>
      <td>Brazil</td>
      <td>1958</td>
      <td>5</td>
    </tr>
    <tr>
      <td>Argentina</td>
      <td>1978</td>
      <td>2</td>
    </tr>
    <tr>
      <td rowspan="5">Europe</td>
      <td>Italy</td>
      <td>1934</td>
      <td>4</td>
    </tr>
    <tr>
      <td>Germany</td>
      <td>1954</td>
      <td>4</td>
    </tr>
    <tr>
      <td>England</td>
      <td>1966</td>
      <td>1</td>
    </tr>
    <tr>
      <td>France</td>
      <td>1998</td>
      <td>1</td>
    </tr>
    <tr>
      <td>Spain</td>
      <td>2010</td>
      <td>1</td>
    </tr>
  </tbody>
</table>
```

[[colspan]]
[[rowspan]]
# thead
Defines a group of **table rows** `<tr>` at the start of a `<table>`.

```html
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Instrument</th>
    </tr>
  </thead>
  <tfoot>
    <tr>
      <th>Name</th>
      <th>Instrument</th>
    </tr>
  </tfoot>
  <tbody>
    <tr>
      <td>John Lennon</td>
      <td>Rhythm Guitar</td>
    </tr>
    <tr>
      <td>Paul McCartney</td>
      <td>Bass</td>
    </tr>
    <tr>
      <td>George Harrison</td>
      <td>Lead Guitar</td>
    </tr>
    <tr>
      <td>Ringo Starr</td>
      <td>Drums</td>
    </tr>
  </tbody>
</table>
```
# time
Defines a **time** on a 24h clock.

```html
The game starts at <time datetime="2017-04-29T19:00">19:00</time>.
```

[[datetime]]
# title
Defines the **title** of the web page, displayed on the browser tab.

```html
<title>The title element - HTML Reference</title>
```
# tr
Defines a **table row**.

```html
<table>
  <thead>
    <tr>
      <th colspan="4">World Cup winners</th>
    </tr>
    <tr>
      <td colspan="2">Location</td>
      <td colspan="2">Score</td>
    </tr>
    <tr>
      <td>Continent</td>
      <td>Country</td>
      <td>First</td>
      <td>Total</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="3">South America</td>
      <td>Uruguay</td>
      <td>1930</td>
      <td>2</td>
    </tr>
    <tr>
      <td>Brazil</td>
      <td>1958</td>
      <td>5</td>
    </tr>
    <tr>
      <td>Argentina</td>
      <td>1978</td>
      <td>2</td>
    </tr>
    <tr>
      <td rowspan="5">Europe</td>
      <td>Italy</td>
      <td>1934</td>
      <td>4</td>
    </tr>
    <tr>
      <td>Germany</td>
      <td>1954</td>
      <td>4</td>
    </tr>
    <tr>
      <td>England</td>
      <td>1966</td>
      <td>1</td>
    </tr>
    <tr>
      <td>France</td>
      <td>1998</td>
      <td>1</td>
    </tr>
    <tr>
      <td>Spain</td>
      <td>2010</td>
      <td>1</td>
    </tr>
  </tbody>
</table>
```
# track
Defines text tracks (like subtitles) for `<audio>` and `<video>` elements.
# u
Makes an element's text **underlined**.

```html
Hello <u>World</u>
```
# ul
Defines an **unordered** list.

```html
<p>My shopping list:</p>
<ul>
  <li>Milk</li>
  <li>Bread</li>
  <li>Chocolate</li>
  <li>More chocolate</li>
</ul>
```
# var
Defines a **variable** in a mathematical or programming expression.

```html
The value of <var>x</var> is 12.
```
# video
Allows to embed an video clip into a web page.

```html
<video src="/assets/HTML 5 Video.mp4" controls></video>
```

[[src]]
[[autoplay]]
[[controls]]
[[loop]]
[[muted]]
[[preload]]
[[poster]]
[[height]]
[[width]]
# wbr(experimental)
Defines a location within a block of text where the browser could eventually insert **line break**.