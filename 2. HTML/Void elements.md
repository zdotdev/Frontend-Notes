## Void element
A void element is an element in HTML that cannot have any child nodes (i.e., nested elements or text nodes). Void elements only have a start tag; end tags must not be specified for void elements.

In HTML, a void element must not have an end tag. For example, `<input type = "text"></input>` is invalid HTML. In contrast, SVG or MathML elements that cannot have any child nodes may use an end tag instead of XML self-closing-tag syntax in their start tag.

Although there is no way to mark up a void element as having any children, child nodes can be added programmatically to the element in the DOM using JavaScript. But that is not a good practice, as the outcome will not be reliable.

The void elements in HTML are as follows:

- `<area>`
- `<base>`
- `<br>`
- `<col>`
- `<embed>`
- `<hr>`
- `<img>`
- `<input>`
- `<link>`
- `<meta>`
- `<param>`
- `<source>`
- `<track>`
- `<wrb>`

## Self-closing tags

Self-closing tags (`<tag/>`) do not exist in HTML.

If trailing / (slash) character is present in the start tag of an HTML element, HTML parsers ignore that slash character. This is important to remember when an element such as `<script>` or `<url>` does require a closing tag. In this case, adding a trailing slash in the start tag does not close the element.

However, some code formatters add the trailing slash character to the start tags of void elements to make them XHTML-compatible and more readable. For example, some code formatters will convert `<input type="text">` to `<input type="text"/>`.

Self-closing tags are required in void elements in XML, XHTML, and SVG (e.g., `<circle cx="50" r="50" />`).

In SVG and MathML, elements that cannot have any child nodes are allowed to be marked as self-closing. In such case, if an element's start tag is marked as self-closing, the element must not have an end tag.