# HTML

HTML is short for Hyper Text Markup Language. It is one of the many markup languages you will see as a software developer but HTML is special since it's the primary component to making a website.

The easiest way to think of HTML is as the skeleton of your website. It props up every other component.

All you need to do to start working with HTML is to create a text file and save it with a `.htm` or `.html` extension. Then you can edit it with any text editor and open it for viewing in any browser!

## Elements

The primary component of html are it's elements. Each element in html is a different tool to help you build a web page. For example let's look a the paragraph element.

```html
<p id="the-short-paragraph" class="my-paragraph-style">I am a very short paragraph.</p>
```

This element consists of four parts.

* The opening tag
* The closing tag
* The attributes
* The content

The opening tag is `<p>` and the closing tag is `</p>`. Every tag is wrapped in `<>` and every closing tag will have a `/` after the `<`.

The above element has two attributes, `id="the-short-paragraph"` and `class="my-paragraph-style"`. An attribute consists of the name and the value you are setting it to. The name will always come first and will always be an equal sign between the name and value. The value must always be wrapped in quotes.

The last part is the content portion of the tag. The content can either be plain text or it can be more HTML elements.

### Exceptions to the rules above

I said "always" and "must" a couple times where it's not necessarily true.

The first exception is that there are some elements which cannot have any content. These elements should not have a closing tag. One example is the `img` tag which is used to put images on the web page.

```html
<img src="path/to/file.png" alt="some image">
```

In the above what image is displayed will be defined by the `src` attribute and if the image can't load then the `alt` attribute is used to define what text shows up should the image fail to load. And since we can't define content on an `img` tag you will notice there is no closing tag.

The second exception has to do with the attributes. There is a type of attribute called a boolean attribute. This is used to set a true or false value. With a boolean attribute it is assumed to be true if it is included in the elements opening tag and false if it is absent. An example of this is when creating an input for a form you have the option to make a certain field required with the `required` attribute.

```html
<input type="text" size="10" required>
```

## DOCTYPE

The doctype is something you should put at the top of all your html files. This tells the browser which version of html to use when rendering the page. As of HTML5 this is pretty easy as the doctype has been simplified and will look like this.

```html
<!DOCTYPE html>
```

You will notice the above has no version information. That's what I mean by it got easier. It prior versions you would need to be specific about which version of html you wanted.

## The basic elements for every document

There are 3 basic elements you will have in any document.

* html
* head
* body

The html element will wrap your entire html document except for the doctype. The head is where you put the non-visual information like metadata and the body is where you put the visuals that the user will see on the web page.

Your basic blank HTML document will look like this:

```html
<!DOCTYPE html>
<html lang="en">
<head>
</head>
<body>
</body>
</html>
```

It is important to inlude the `lang` attribute on the html tag for users with screenreaders so the reader knows what language the page is in.

## Other important but not required elements

The last two elements I need to tell you about are the `title` and `meta` elements. Both of these elements go into the head element.

The title element simply sets the title of the page that will show up in your tab or when the user trys to book mark the page.

The meta tag can be used for setting many other properties for your browser to use. It can also be used to set generic metadata for search engines and web crawlers to find. I would suggest adding the following 3 tags to the head of your documents.

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Your Title Here!</title>
```

The meta data tag with the `charset` attribute is telling your browser to use `UTF-8`. This is the standard charset for most applications and it allows you to use emojis! 🦍💎✋💎🦍💎🤚💎🦍

The other meta data tag tells the browser that the width of the page is the device width and to scale the content to fit that width. This is generally the desired behavior in a world where some people still use 720p screens and some use 8k screens.

## A Good Starting Template

Overall put all together a simple html page should look like this:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Title Here!</title>
</head>
<body>
    <h1>Hello World</h1>
    <p>This is a simple web page!</p>
</body>
</html>
```

[You can also find the template above here.](template.htm)

## Other resources

The only thing left to learn with HTML is the individual elements which I won't be covering individually. For a refrence to the different HTML elemenets I recommend the MDN: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes

For a more practical hands on tutorial I recommend codecademy: https://www.codecademy.com/learn/learn-html

Elements I recommend you learn before moving on to CSS:

* p (paragraph)
* h1 (header 1. HTML also has 6 header tags where size of the text is the only difference.)
* ol (ordered list)
* ul (unordered list)
* li (list item)
* img (image)
* form
* label
* input
* textarea
* button
* div (a container to help you organize the document. Ussually other elements will go into divs)
* span (a container to help you notate something is different. Ussually used inside a other content like paragraphs or lists. Note: This one is nearly impossible to find a use for without styles)

These are the elements your will likely use most often and is good baseline knowledge. [Here is an example of a page using all the above elements.](full-example.htm)
