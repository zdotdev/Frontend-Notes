```css
*,
*::before, 
*::after { 
content: none; 
box-sizing: border-box;
}

html,
body{
margin: 0;
padding: 0;
}
```


# Media Query
## @media screen size
This will change the whole system sizing according to the user device.

**max width: Desktop first approach**
```css
@media only screen and (max-width: 1600px) {

}
```

**min-width: Mobile first approach(commonly used in css frameworks)**
```css
@media only screen and (min-width: 480px) {

}
```
## @media preference
It will change the css styles according to the system theme the user is using:

**Light Mode**
```css
@media (prefers-color-scheme: light) {

  :root {

    color: #213547;

    background-color: #ffffff;

  }

  a:hover {

    color: #747bff;

  }

  button {

    background-color: #f9f9f9;

  }

}
```

**Dark Mode**
```css
@media (prefers-color-scheme: dark) {

  :root {

    color: #213547;

    background-color: #ffffff;

  }

  a:hover {

    color: #747bff;

  }

  button {

    background-color: #f9f9f9;

  }

}
```

## @keyframes
This is use to create a custom effects in CSS. It can manipulate the transitions, animations, and effects of an element. [CSS Animation](obsidian://open?vault=Front-End&file=3.%20CSS%2FCSS%20Animation%2FCSS%20Animation)
```css
.name{

  animation: name 2s ease-in forwards 3;

}

  

@keyframes name{

  0%{

    transform: translateX(-20rem);

    color: white;

  }

  50%{

    transform: translateX(0%);

    color: black;

  }

  100%{

    transform: translateX(-20rem);

    color: white;

  }

}
```
# align-content
Defines how each line is aligned within a flexbox/grid container. It only applies if `flex-wrap: wrap` is present, and if there are **multiple lines** of flexbox/grid items.

[[align-content.. stretch;]]
[[align-content.. flex-start;]]
[[align-content.. flex-end;]]
[[align-content.. center;]]
[[align-content.. space-between;]]
[[align-content.. space-around;]]
# align-items
Defines how flexbox items are aligned according to the **cross** axis, within a line of a flexbox container.

[[align-items.. flex-start;]]
[[align-items.. flex-end;]]
[[align-items..center;]]
[[align-items..baseline;]]
[[align-items..stretch;]]
# align-self
Works like `<align-items`, but applies only to a **single** flexbox item, instead of *all* of them.

[[align-self..auto;]]
[[align-self..flex-start;]]
[[align-self..flex-end;]]
[[align-self..center;]]
[[align-self..baseline;]]
[[align-self..stretch;]]
# animation-delay
Defines how long the animation has to wait  before **starting**. The animation will only be delayed on its *first* iteration.

[[animation-delay..0s;]]
[[animation-delay..1.2s;]]
[[animation-delay..2400ms]]
[[animation-delay..-500ms;]]
# animation-direction
Defines in which direction the animation is played.

[[animation-direction..normal;]]
[[animation-direction..reverse;]]
[[animation-direction..alternate;]]
[[animation-direction..alternate-reverse;]]
# animation-duration
Defines how long the animation lasts.

[[animation-duration..0s;]]
[[animation-duration..1.2s;]]
[[animation-duration..2400ms;]]
# animation-fill-mode
Defines what happens before an animation start and after it ends. The fill mode allows to tell the browser if the animation's styles should also be applied outside the animation.

[[animation-fill-mode..none;]]
[[animation-fill-mode..forwards;]]
[[animation-fill-mode..backwards;]]
[[animation-fill-mode..both;]]
# animation-iteration-count
Defines how many items the animation is played.

[[animation-iteration-count..1;]]
[[animation-iteration-count..2;]]
[[animation-iteration-count..infinite;]]
# animation-name
Defines which animation keyframes to use.

[[animation-name..none;]]
[[animation-name..fadeIn;]]
[[animation-name..moveRight;]]
# animation-play-state
Defines if an animation is playing or not.

[[animation-play-state..running;]]
[[animation-play-state..paused;]]
# animation-timing-function
Defines how the values between the *start* and the *end* of the animation are calculated.

[[animation-timing-function..ease;]]
[[animation-timing-function..ease-in;]]
[[animation-timing-function..ease-out;]]
[[animation-timing-function..ease-in-out;]]
[[animation-timing-function..linear;]]
[[animation-timing-function..step-start;]]
[[animation-timing-function..step-end;]]
[[animation-timing-function..steps(4, end);]]
# animation
Shorthand property for `animation-name animation-duration animation-timing-function animation-delay animation-iteration-count animation-direction animation-fill-mode` and `animation-play-state`.

Only `animation-duration` and `animation-name` are **required**.
# background-attachment
Defines *how* the background image will behave when scrolling the page.

[[background-attachment..scroll;]]
[[background-attachment..fixed;]]
# background-clip
Defines how far the background should **extend** within the element. 

[[background-clip..border-box;]]
[[background-clip..padding-box;]]
[[background-clip..content-box;]]
# background-color
Defines the color of the element's background.

[[background-color..transparent;]]
[[background-color..red;]]
[[background-color..#05ffb0;]]
[[background-color..rgb(50, 115, 220);]]
[[background-color..rgba(50, 115, 220, 0.3);]]
[[background-color..hsl(14, 100%, 53%);]]
[[background-color..hsla(14, 100%, 53%, 0.6);]]
# background-image
Defines an image as the background of the element.

[[background-image..none;]]
[[background-image..url(/images/jt.png);]]
[[background-image..linear-gradient(red, blue);]]
[[background-image..linear-gradient(45deg, red, blue);]]
[[background-image..radial-gradient(green, purple);]]
[[background-image..radial-gradient(circle, green, purple);]]
[[background-image..radial-gradient(circle, green 0%, purple 20%, orange 100%);]]
[[background-image..radial-gradient(circle, closest-side, green 0%, purple 20%, orange 100%);]]
[[background-image..radial-gradient(circle, closest-side at 45px 45px, green 0%, purple 20%, orange 100%);]]
# background-origin
Defines the origin of the background image.

[[background-origin..padding-box;]]
[[background-origin..border-box;]]
[[background-origin..content-box;]]
# background-position
Defines the position of the background image.

[[background-position..0% 0%;]]
[[background-position..bottom right;]]
[[background-position..center center;]]
# background-repeat
defines how the background image repeats itself across the element's background, starting from the background position.

[[background-repeat..repeat;]]
[[background-repeat..repeat-x;]]
[[background-repeat..repeat-y;]]
[[background-repeat..no-repeat;]]
# background-size
Defines the size of the background image.

[[background-size..auto-auto;]]
[[background-size..120px 80px;]]
[[background-size..100% 50%;]]
[[background-size..contain;]]
[[background-size..cover;]]
# background
Shorthand property for `background-image` `background-position` `background-size` `background-repeat` `background-origin` `background-clip` `background-attachment` and `background-color`. 
# border-bottom-color
Like `border-color`, but the **bottom** border only.

[[border-bottom-color..transparent;]]
[[border-bottom-color..red;]]
[[border-bottom-color..#05ffb0;]]
# border-bottom-left-radius
Defines the **radius** of the bottom left corner.

[[border-bottom-left-radius..0;]]
[[border-bottom-left-radius..20px;]]
[[border-bottom-left-radius..50%;]]
[[border-bottom-left-radius..20px 50%;]]
# border-bottom-right-radius
Defines the **radius** of the bottom right corner.

[[border-bottom-right-radius..0;]]
[[border-bottom-right-radius..20px;]]
[[border-bottom-right-radius..50%;]]
[[border-bottom-right-radius..20px 50%]]
# border-bottom-style
Like `border-style`, but for the **bottom** border only.

[[border-bottom-style..none;]]
[[border-bottom-style..dotted;]]
[[border-bottom-style..dashed;]]
[[border-bottom-style..solid;]]
[[border-bottom-style..double;]]
[[border-bottom-style..groove;]]
# border-bottom-width
Like `border-width`, but for the **bottom** border only.

[[border-bottom-width..0;]]
[[border-bottom-width..4px;]]
# border-bottom
Shorthanded property for `border-bottom-width border-bottom-style` and `border-bottom-color`. 

[[border-bottom..4px dotted red;]]
[[border-bottom..2px solid;]]
# border-collapse
Defines whether **table** borders should be separated or collapsed.

[[border-collapse..separate;]]
[[border-collapse..collapse;]]
# border-color
defines the color of the element's borders.

[[border-color..transparent;]]
[[border-color..red;]]
[[border-color..#05ffb0;]]
[[border-color..rgb(50, 115, 220);]]
[[border-color..rgba(50, 115, 220, 0.3);]]
[[border-color..hsl(14, 100%, 53%);]]
[[border-color..hsla(14, 100%, 53%, 0.6);]]
# border-left-color
Like `border-color` but for the **left** border ony.

[[border-left-color..transparent;]]
[[border-left-color..red;]]
[[border-left-color..#05ffb0;]]
# border-left-style
Like `border-style`, but for the **left** border only.

[[border-left-style..none;]]
[[border-left-style..dotted;]]
[[border-left-style..dashed;]]
[[border-left-style..solid;]]
[[border-left-style..double;]]
[[border-left-style..groove;]]
# border-left-width
like `border-width`, but for the **left** border only.

[[border-left-width..0;]]
[[border-left-width..4px;]]
# border-left
Shorthand property for `border-left-width border-left-style` and `border-left-color`.

[[border-left..4px dotted red;]]
[[border-left..2px solid;]]
# border-radius
Defines the **radius** if the element's corners.

[[border-radius..0;]]
[[border-radius..20px;]]
[[border-radius..50%;]]
[[border-radius..20px 50%;]]
# border-right-color
Like `border-color`, but for the right border only.

[[border-right-color..transparent;]]
[[border-right-color..red;]]
[[border-right-color..#05ffb0;]]
# border-right-style
Like `border-style`, but for the right border only.

[[border-right-style..none;]]
[[border-right-style..dotted;]]
[[border-right-style..dashed;]]
[[border-right-style..solid;]]
[[border-right-style..double;]]
[[border-right-style..groove;]]
# border-right-width
Like `border-width`, but for the **right** border only.

[[border-right-width..0;]]
[[border-right-width..4px;]]
# border-right
Shorthand property for `border-right-width border-right-style` and `border-right-color`.

[[border-right..4px dotted red;]]
[[border-right..2px solid;]]
# border-style
Defines the style of the element's borders.

[[border-style..none;]]
[[border-style..dotted;]]
[[border-style..dashed;]]
[[border-style..solid;]]
[[border-style..double;]]
[[border-style..groove;]]
# border-top-color
Like `border-color`, but for the **top** border only.

[[border-top-color..transparent;]]
[[border-top-color..red;]]
[[border-top-color..#05ffb0;]]
# border-top-left-radius
Defines the **radius** of the top left corner.

[[border-top-left-radius..0;]]
[[border-top-left-radius..20px;]]
[[border-top-left-radius..50%;]]
[[border-top-left-radius..20px 50;]]
# border-top-right-radius
Defines the **radius** of the top right corner.

[[border-top-right-radius..0;]]
[[border-top-right-radius..20px;]]
[[border-top-right-radius..50%;]]
[[border-top-right-radius..20px 50;]]
# border-top-style
Like `border-style`, but for the top border only.

[[border-top-style..none;]]
[[border-top-style..dotted;]]
[[border-top-style..dashed;]]
[[border-top-style..solid;]]
[[border-top-style..double;]]
[[border-top-style..groove;]]
# border-top-width
Like `border-width`, but for the **top** border only.

[[border-top-width..0;]]
[[border-top-width..4px;]]
# border
Shorthand property for `border-width border-style` and `border-color`.

[[border..4px dotted red;]]
[[border..2px solid;]]
# bottom
Defines the position of the element according to its **bottom** edge.

[[bottom..auto;]]
[[bottom..20px;]]
[[bottom..0;]]
# box-shadow
Defines the shadows of the element.

[[box-shadow..none;]]
[[box-shadow..2px 6px;]]
[[box-shadow..2px 6px red;]]
[[box-shadow..2px 6px 10px red;]]
[[box-shadow..2px 6px 10px 4px red;]]
# box-sizing
Defines the width and height of the element are calculated: whether they include *padding* and *borders* or not.

[[box-sizing..content-box;]]
[[box-sizing..border-box;]]
# clear
Moves the element after all the preceding floating elements.

[[clear..none;]]
[[clear..left;]]
[[clear..right;]]
[[clear..both;]]
# color
Defines the color of the **text**.

[[color..transparent;]]
[[color..red;]]
[[color..#05ffb0;]]
[[color..rgb(50, 115, 220);]]
[[color..rgba(0, 0, 0, 0.5);]]
[[color..hsl(14, 100%, 53%);]]
[[color..hsla(14, 100%, 53%, 0.6;)]]
# column-count
Defines the number of columns of the element.

[[column-count..auto;]]
[[column-count..3;]]
# column-gap
Defines the gap between the columns of the element.

[[column-gap..normal;]]
[[column-gap..2px;]]
# column-width
Defines the width of columns of the element.

[[column-width..auto;]]
[[column-width..10px;]]
# content
Defines the text content of the `:before` and `:after` pseudo-elements.

[[content..normal;]]
[[content..'Foo bar';]]
[[content..url(/images/jt.png);]]
[[content..attr(data-something);]]
# cursor
Sets  the mouse cursor when hovering the element.

[[cursor..default;]]
[[cursor..auto;]]
[[cursor..pointer;]]
[[cursor..move;]]
[[cursor..crosshair;]]
[[cursor..text;]]
[[cursor..wait;]]
[[cursor..help-resize;]]
[[cursor..ne-resize]]
[[cursor..nw-resize;]]
[[cursor..n-resize;]]
[[cursor..se-resize;]]
[[cursor..sw-resize;]]
[[cursor..s-resize;]]
[[cursor..w-resize;]]
# display
Sets the display behavior if the element.

[[display..none;]]
[[display..inline;]]
[[display..block;]]
[[display..inline-block;]]
[[display..list-item;]]
[[display..table;]]
[[display..table-cell;]]
[[display..table-row;]]
[[display..flex;]]
[[display..inline-flex;]]
[[display..grid;]]
[[display..inline-grid;]]
# flex-basis
Defines initial size of a flexbox item.

[[flex-basis..auto;]]
[[flex-basis..80px;]]
# flex-direction
Defines how flexbox items are ordered within a flexbox container.

[[flex-direction..row;]]
[[flex-direction..row-reverse;]]
[[flex-direction..column;]]
[[flex-direction..column-reverse;]]
# flex-flow
shorthand property for `flex-direction` and `flex-wrap`.
# flex-grow
Defines how much a flexbox item should **grow** if there's space available.

[[flex-grow..0;]]
[[flex-grow..1;]]
[[flex-grow..2;]]
# flex-shrink
Defines ho much a flexbox should **shrink** if there's **not enough** space available.

[[flex-shrink..1;]]
[[flex-shrink..0;]]
[[flex-shrink..2;]]
# flex-wrap
defines if flexbox items appear on a **single line** or on **multiple lines** within a flexbox.

[[flex-wrap..nowrap;]]
[[flex-wrap..wrap;]]
[[flex-wrap..wrap-reverse;]]
# float
Pushes the element to either the **left** or **right** side. The following siblings will **wrap around** the floating element.

[[float..none;]]
[[float..left;]]
[[float..right;]]
# font-family
[[font-family..'Source Sans Pro', 'Arial', sans-serif;]]
[[font-family..serif;]]
[[font-family..sans-serif;]]
[[font-family..monospace;]]
[[font-family..cursive;]]
[[font-family..fantasy;]]
# font-size
Defines the size of the text.

[[font-size..medium;]]
[[font-size..20px;]]
[[font-size..1.2em;]]
[[font-size..1.2rem;]]
[[font-size..90%;]]
[[font-size..smaller;]]
[[font-size..x-large;]]
# font-style
Define how much the text is slanted.

[[font-style..normal;]]
[[font-style..italic;]]
[[font-style..oblique;]]
# font-variant
Defines which glyph to use for each letter.

[[font-variant..normal;]]
[[font-variant..small-caps;]]
# font-weight
Defines the weight of the text.

[[font-weight..normal;]]
[[font-weight..bold;]]
[[font-weight..600;]]
[[font-weight..lighter;]]
# font
Shorthand property for `font-style font-variant font-weight font-size line-height` and `font-family`.
# grid-area
# grid-auto-column
# grid-auto-flow
# grid-auto-rows
# grid-column-end
# grid-column-gap
# grid-column-start
# grid-column
# grid-gap
# grid-row-end
# grid-row-gap
# grid-row-start
# grid-row
# grid-template-areas
# grid-template-columns
# grid-template-rows
# grid-template
# grid
# height
# justify-content
# left
# letter-spacing
# line-height 
# list-style-image
# list-style-position
# list-style-type
# list-style
# margin-bottom
# margin-left
# margin-right
# margin top
# margin
# max-height
# max-width
# min-height
# min-width
# mix-blend-mode
# opacity
# order
# outline-color
# outline-style
# outline-width
# outline
# overflow-wrap
# overflow-x
# overflow-y
# overflow
# padding-bottom
# padding-left
# padding-right
# padding-top
# padding
# pointer-events
# position
# resize
# right
# text-align 
# text-decoration
# text-indent
# text-overflow
# text-shadow
# text-transform
# top
# transform-origin
# transform
# transition-delay
# transition-duration
# transition-property
# transition-timing-function
# transition
# vertical-align
# white-space
# width
# will-change
# word-break
# word-spacing
# z-index