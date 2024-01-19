# CSS Transition
**`Transistion:`** Shorthand for `transition-property`, `transition-duration`, `transistion-timing-function`, and `transition-delay`
**Example:**
```css
div{
	Transition: Translate 300ms 300ms ease-in-out;
}

div::Hover{
	Transform: TranslateX(300px);
}
```

**`Transistion-Delay`** Defines how long the transition has to wait before **starting**.
**Example:**
```css
div{
	Transition-Delay: 300ms;
}

div::Hover{
	Transform: TranslateX(300px);
}
```

**`Transistion-duration:`** Defines how long the transition lasts.
**Example:**
```css
div{
	Transition-Duration: 300ms;
}

div::Hover{
	Transform: TranslateX(300px);
}
```

**`Transistion-property:`** Defines which properties will transition. (If not justified, it will run the default effects).
**Example:**
```css
div{
	Transition-Property: Transform;
}

div::Hover{
	Transform: TranslateX(300px);
}
```

**`Transistion-Timing-Function:`** - Defines how the values between the _start_ and the _end_ of the transition are calculated.
**Example:**
```css
div{
	Transition-Timing-Function: ease-in-out;
}

div::Hover{
	Transform: TranslateX(300px);
}
```

# CSS Transform
Defines how the element is transformed.
**Example:**
```css
div{
	Transition-Duration: 300ms;
}

div::Hover{
	Transform: TranslateX(300px);
}
```

