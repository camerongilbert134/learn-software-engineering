# CSS

CSS is short for Cascading Style Sheets. This language is used to apply styles to your web page. HTML is great for creating and structuring content but by itself the result will look very bland. That is where CSS comes to spice up your life.

Just like working with HTML you will need to create a text file but this time you will want to give the text file a `.css` extension.

First before we go any further let me tell you how to add a style sheet to your web page.

## The link element

HTML has an element called the `link` element which can be used to link certain kinds of external resources. CSS is one of them. This element should be placed in the `head` of your html document. The link element has 2 attributes you will use when working with stylesheets. The `rel` attribute which defines how this link will relate to the document. When adding a stylesheet you will always set `rel` to `stylesheet`. The other element is the `href` attribute. This is used to define the path to your stylesheet. All together it should look like this:

```html
<link rel="stylesheet" href="path/to/my/stylesheet.css">
```

You must add this to your page for it to use your stylesheet.

## CSS Basics

There are 2 primary components to CSS. Selectors and declarations. Selectors are used to determine which of elements in you html document to apply styles too. Declarations are the styles you want to apply to the selected elements. As a overview a CSS document would look something like this.

```css
selector1 {
    declarations
}

selector2 {
    declarations
}
```

After writing your selector you will put your declarations between `{}` brackets. Any declarations inside the brackets apply to the given selector.

## Declarations

We are going to start with declarations since they are very easy. Much like HTML elements a lot of what makes declarations hard is just the sheer number of them to learn. How they work is very easy though.

Declarations are nothing more then keys with values seperated by a `:`. The key will go before the `:` and the value will be placed after. At the end of defining a declaration you will need to end the line with a semi colon `;` in order to tell the browser you are done with that declaration.

Here is a some basic css with some declarations so you can see it in action.

```css
body {
    background-color: rgba(0, 100, 255, 1);
}

p {
    color: #443B33;
    font-family: "Comic Sans", sans-serif;
}
```

In the above we set the background color for the `body` element and then change the font color and family of all the `p` elements.

You will notice the colors are both defined a little differently. CSS allows you to assign colors using hex codes or using a couple built in functions css has `rgb` or `rgba`. The `rgba` has an alpha value you can set to define transparency.

## Selectors

As mentioned above selectors are what determine where your style declarations are applied. Any element that matches your selector will have the style applied.

To select all instances of an element you just put the name of the element as the selector.

```css
p {}
```

If you want to select all instances of elements with a certain class you put the class name after a period `.`.

```css
.my-class {}
```

If you want to select all instances of elements with a certain id you would put the id after a octothorpe `#`. (Note: it is bad practice to have more then one element with the same id.)

```css
#my-id {}
```

You can chain these together to select an element that has all those properties. For example this would try to select the `p` element that has the id `some-id` while also having the class `some-class`.

```css
p#some-id.some-class
```

You can apply a set of styles to multiple selectors by seperating the selectors with a comma `,`. For example the following will apply styles to any h1 tag and any tag with a certain class.

```css
h1, .a-certain-class {}
```

You can select all instance of a specific element with a specific attribute by putting `[]` brackets after the element name in the selector with no spacing inbetween. In the brackets you would put the attribute name and what the value is suppose to be in order to be selected. The attribute name and value should be seperated by an equal sign. For example the following selector would apply a style to all text inputs.

```css
input[type=text] {}
```

When selecting by an attribute you can also skip the element all together. For example another way to select elements of and id is the following(but shouldn't since there is the easier way mentioned above):

```css
[id=my-id] {}
```

If you need to select an element inside another element you can seperate 2 selectors with a space. For example the following will find all buttons that are in a form.

```css
form button {}
```

If you need to select an element that is a child of another element you can seperate 2 selectors with a `>`. The difference between using the `>` and just using a space like above is that it can will only find direct children and not children of children or children of children of children, etc... It will be easier to show an example.

In the below example since li is not a direct child of div using `div > li` does not work while the other 3 examples do.

```html
<div>
    <ul>
        <li>
        </li>
    </ul>
</div>
```

```css
div li {} /* SELECTS THE LIST ELEMENTS */
ul li {} /* SELECTS THE LIST ELEMENTS */
div > li {} /* DOES NOT SELECT ANYTHING */
ul > li {} /* SELECTS THE LIST ELEMENTS */
```

CSS also offers selector for when an elements state might be different. For example when you hover over a link. These are called pseudo-classes. You can add them in the selector by adding a colon `:` followed by the name of the pseudo-class.

```css
a:hover {
    color: rgba(100, 40, 40, 1);
}
```

There is also a type of selector that can let you select only part of an element. These are called pseudo-elements. You can add these by adding 2 colons `::` to the end of you selector followed by the pseudo-element name.

```css
p::first-letter {
    font-size: 1em;
}
```

Another very niche tool is the subsequent sibling combinator. You can add a `~` in between 2 selectors and it means that after the first selectors condition has been met any element of the second selector will have the style applied. The second element must be a direct sibling of the first element. Meaning they must have the same parent element. Here is an example:

```css
p ~ span {
    color: red;
}
```

```html
<span>Not red</span>
<p>Not red</p>
<span>RED</span>
<span>RED</span>
<p>Not red</p>
<span>RED</span>
<div>
    <span>Not red</span>
    <p>Not red</p>
    <span>RED</span>
</div>
<span>RED</span>
```

The next-sibling combinator is about as niche as the last tool. You can add a `+` in between your 2 selector and if the second selector immediately follows the first one the style will be applied to the element that matched the second selector. Here is an example:

```css
p + span {
    color: blue;
}
```

```html
<span>Not blue</span>
<p>Not blue</p>
<span>BLUE</span>
<span>Not blue</span>
<p>Not blue</p>
<p>Not blue</p>
<span>BLUE</span>
```

## Specificity

Now you may wonder about what happens when you have conflicting styles trying to be applied. If one selector tries to set the text color and another tries to set the text color of the same element which one wins? That is where specificity comes into play. Everything in a selector is worth points. Which ever has the most points wins!

Elements are worth 1 point - (`a`, `p`, `span`, `div`, etc)
Ids are worth 100 points - (`#some-id`)
Everything else is worth 10 points - (`.some-class`, `[type=text]`, etc)

For example the bottom has 2 elements, an id and 2 other things (the class and `:hover`).
2pts - elements
100pts - id
20pt - the other things

```css
div.some-class#someId a:hover {}
```

You can override specificity by adding `!important` to the end of a style declaration. In general this is considered bad practice and more of a "break glass in case of emergency" type of thing. In the following example the color would always be applied.

```css
span {
    color: purple !important;
    font-size: 1.5em;
}
```

Another way to override specificity is to define a style in an element itself. You can do that with the `style` attribute. This is also generally bad practice and mostly only done when there is no other way to apply a style. One thing to note is this doesn't actually override the specificity but the styles in the style tag are worth 1000 points so it would be rare to have specificity past that.

```html
<p style="color: green;">This text would be green!</p>
```

## Variables

You can also define variables in css. While you can place them anywhere they will generally be most useful in the `:root` styles. You define these variable in the declarations by putting two dashes `--` before the variable name. To use them you will need to use the css `var()` function.

```css
:root {
    --my-color-schemes-primary: rgba(40, 40, 130);
}

body {
    background-color: var(--my-color-schemes-primary);
}
```

## CSS at-rules

At-rules are a set of CSS functionality that interacts with the clients device on a different level to get information. For example there is an at-rule for importing styles. There is an at-rule for checking the browser aspect ratio and applying styles based on that. These are used by placing them in your selector. The selector will start with an `@` followed by the rule name. Hence the name at-rules.

```css
@import "path/to/other/style.css";

@font-face {
  font-family: "Some font";
  src: url("path/to/some/font.woff2") format("woff2");;
}

/* these can be nested */
@supports (display: flex) {
  @media (max-aspect-ratio: 16/9) {
    div {
      display: flex;
    }
  }
}
```

## Media-queries

Media queries let you apply styles based on details about the users device. One of the most common media queries is to check the user display aspect ratio to determine if they are browsing in landscape or portrait mode.

Media queries are defined with @

## Other resources

The MDN is also a good resources for css. On the side bar there are a bunch of lessons on how to do different things. But the best part about it is the reference section on the sidebar. Everything is there. https://developer.mozilla.org/en-US/docs/Web/CSS


For more practical hands on learing codecademy is the spot. https://www.codecademy.com/learn/learn-css

Before moving on to Javascript I would suggest having a good grasp on the following properties:

* `background` + `background-*`
* `font` + `font-*`
* `color`
* `border`
* `padding`
* `margin`
* `display`
* `height`
* `width`
* `left`
* `top`
* `position`
* `flex` (This one may take a while to get. Don't be discouraged.)

I also recommend having a grasp on the basic pseudo classes or styling links will be impossible.
Pseudo-classes: `:hover`, `:focus`, `:active`, `:visited`

Extra credit:
Animation properties: `animation`, `tranistion`, `transform`, `translate`
Form pseudo classes: `:enabled`, `:disabled`, `:focus`, `:checked`, `:valid`, `:invalid`, `:optional`, `:required`
