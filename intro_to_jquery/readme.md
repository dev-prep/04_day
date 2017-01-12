# Intro to jQuery 

## Objectives
  1. Understand what jQuery is, and when to use it
  2. Understand how to apply jQuery selectors to manipulate DOM elements
  3. Add and remove DOM elements using jQuery
  4. Bind events with jQuery

## What is jQuery?
jQuery is a 3rd-party library that is intended to make front-end development tasks — particularly those involving DOM selection and manipulation — easier, faster, and more fun.

### But wait, what do we mean by 'library'?
A **`library`** is just a collection of reusable methods that serve a particular purpose.


### So, as a library, what does jQuery offer us?
  - jQuery helps us manipulate the DOM, allowing us to perform complex manipulations in fewer lines of code with less hassle
  - jQuery's syntax was developed to mimic CSS selector syntax, making code easier to develop, read, and manage
  - The syntax is shorter, so there's less to remember! 😜
  - jQuery deals with many cross-browser compatibility issues for us

## Using jQuery

### Installation
**jQuery is a client side library, which means we need to include it in our HTML**. To do this, we have two options:

#### 1. Reference jQuery from a server on the internet
Directly from jQuery's website (http://code.jquery.com/)
`<script src="http://code.jquery.com/jquery-2.2.4.min.js"></script>`
From a CDN (content delivery network) like [CDNJS](https://cdnjs.com/) or [Google Hosted Libraries](https://developers.google.com/speed/libraries/)

`<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>`

#### 2. Download a copy of jQuery to host on your own server

[CDNJS](http://www.cdnjs.com), [Google Hosted Libraries](https://developers.google.com/speed/libraries/), and the [jQuery site](http://www.jquery.com) will all allow you to download a copy of jQuery to include in your projects.

#### 1.x vs. 2.x vs. 3.x jQuery

If you visit [code.jquery.com](code.jquery.com), you'll see that there are three major versions in development.
  - The 1.x branch is the most cross-browser-compatible version of the jQuery core.
  - The 2.x branch, while offering some new features, is not compatible with older web browsers — most notably, it's not compatible with Internet Explorer versions 8 and below.
  - The 3.x branch is the newest, but it is also not compatible with Internet Explorer versions 8 and below.

Today we will use version 2.2.4 in our Rock Paper Scissors project.

### Intro to DOM manipulation

Before we get into jQuery, let's look at how we would perform the following tasks with vanilla javascript:

  - `select` a DIV and change its content  
  
	```js
	document.getElementsByTagName('div')[0].innerHTML = 'Hi!'
	```
  
  - `append` a new DIV with some content to a parent element
    
	```js
	var div = document.createElement('div')
	div.innerHTML = 'Secondary Div!'
	document.getElementsByTagName('div')[0].appendChild(div)
	```
  
  - `listen` for events on a collection of DIVs or other HTML elements
    + For example, a blog site might have a "like" button for each comment on a post.

	```js
	var buttons = document.getElementsByTagName('button')
	for (var i = 0; i < buttons.length; i++) {
  		buttons[i].addEventListener('click', function(){
    		console.log('clicked!')
  		})
	}
	```
	
That's a lot of code... jQuery will let us do those same tasks with much less code.

![gus](https://media4.giphy.com/media/74bjTAz6syrkc/200.gif)

#### First, let's just talk about selecting an element with jQuery

###### To select an element in the DOM, we use the global jQuery function:

This is the basic syntax for jQuery selections:
`$(' ')`

To select a particular element by tag, you do:
`$('h2') // selects all h2 elements`

To select by ID, you use the same syntax as CSS selectors:
`$('#someID') // Would select the element with id of "someID"`

To select all elements of a particular class, use CSS syntax again:
`$('.someClass') // Selects all elements of the class "someClass"`

And you can use more complicated CSS selectors as well
`$('p.anotherClass') // Selects all <p> tags that also have the class "anotherClass" (<p class="anotherClass">)`

###### If you use variable assignment when doing a selection, a "jQuery" object is returned

We prepend `$` to variable names when a variable is going to be a jQuery object to help us remember what that variable is for.
`var $jqObject = $('p') // Returns a jQuery object containing all <p> tags on your web page.`

However, we don't have to prepend `$` to our variables. It's just so we can remember what a variable is being used for. `var jqObject = $('p') // This is functionally identical to the version above that includes the '$' in front of jqObject.`

A jQuery object has access to jQuery methods, so the `$` is a quick way to signal to yourself and other developers that a specific variable has access to those methods.

#### Selecting a DOM element and changing its content

Using the standard DOM API:

`<div id="myDiv">Hello world!</div>`

```js
var divToManipulate = document.getElementById('myDiv')
divToManipulate.innerHTML = "Goodbye world!"

OR

document.getElementById('myDiv').innerHTML = "Goodbye world!"
```

Now the code above isn't too hard to deal with, but in jQuery, this is a lot leaner.

```js
$('#myDiv').html("Goodbye world!")
```

See it in action [here](http://jsbin.com/rirumatozu/4/edit?html,js,output).

If we wanted to **save our selection as a jQuery object**, the code would look like this instead:

- First we select the element we want and save it as a jQuery object

`var $myDiv = $('#myDiv')`

- Then we use our jQuery object to perform our task

`$myDiv.html("Goodbye world!")`

![what](https://media1.giphy.com/media/xmqHmb0vRfGZq/200.gif)

There are three things about the example above that make jQuery easier to use:

  1. jQuery is using the same syntax as CSS to select elements - `.` for a class and `#` for an id.
  2. jQuery allows us to chain methods together to accomplish our goals (i.e., `$().html(...)` ), making code shorter and easier to understand.
  3. jQuery deals with any cross-browser compatibility issues, which may not seem like a big deal in this example, but which quickly become difficult to deal with as things get more complex.

Let's create a project so we can see jQuery in action. In terminal:

```bash
cd ~/Desktop
mkdir jQuery-practice
cd jQuery-practice
mkdir css js
touch index.html css/style.css js/app.js
open .
```

Then drag the jQuery-practice folder to the Sublime Text icon in your dock to open the whole project in Sublime.

Make the HTML boilerplate, then link the CSS and JS files to the HTML. Also add the jQuery link. Let's talk about *where* these script tags should go. **The order and placement matters!**

#### Appending a DOM element to a parent element

Let's add a div to our HTML:

```html
  <div id="container"></div>
```

If we want to add a new DIV that provides a nice greeting, our vanilla javascript would have to be something like this:

```js
  var myDiv = document.getElementById('container')
  var newP = document.createElement('p')
  newP.innerHTML = 'Hello complicated, multi-step world of adding an element to the DOM!'
  myDiv.appendChild(newP)
```

And in jQuery, it looks like this:

```js
  $('#container').append('<p>Hello simple insertion using jQuery chaining</p>')
```

In the jQuery code example above, we first select the DIV with id="container", then we append a new paragraph element with text. In effect, the new HTML looks like this after the jQuery is run:

```html
  <div id="container">
    <p>
      Hello simple insertion using jQuery chaining
    </p>
  </div>
```
![easy](https://media4.giphy.com/media/zcCGBRQshGdt6/200.gif)

#### Adding and Removing Classes Using jQuery

You can do more than select elements and modify content. You can also add or remove classes, which can affect style.

Let's add this to our CSS file:

```css
.red {
  color: red;
}
```

The code above will change the color of all text inside any element with class="red" to red.

So, let's add class="red" to something!

```js
$('div').addClass('red')
```
We can also remove classes. Add class "bold" to your container div, then set the style like so:

```css
.bold {
  font-weight: bold;
}
```

Refresh your page to make sure it works. Then add this to your JavaScript:

```js
$('div').removeClass('bold')
```

## Adding and Removing Elements Using jQuery

Sometimes in a dynamic web application, user-input is meant to trigger the addition or removal of content or functionality. Using jQuery, we can easily create new DOM elements and insert them into the DOM, or remove existing elements (and any content they contain) from the DOM.

Let's comment out everything in our JS file (leave the two classes in our CSS file).
Now let's change our HTML file to look like this:

```html
<body>
  <div id="container">
    <input type="text" id="addToList">
    <button id="addItem">Add Item</button>
    <ul id="myList">
      
    </ul>
  </div>
  <script src="./js/app.js"></script>
</body>
```

Right now, if you type into the input field and click the button, nothing happens. Let's write some jQuery to make it do something.

```js
$('#addItem').click(function() {
  var $newItem = $('#addToList').val()
  console.log($newItem)
})
```

Now, when we click the button, the text from the input field gets logged to the console. Cool! We can also append the text to the ul. Replace the console.log like so:

```js
$('#addItem').click(function() {
  var $newItem = $('#addToList').val()
  $('#myList').append('<li>' + $newItem + '</li>')
})
```
We can also add another line to clear out the input field after the text has been added to our list:

```js
$('#addItem').click(function() {
  var $newItem = $('#addToList').val()
  $('#myList').append('<li>' + $newItem + '</li>')
  $('#addToList').val('')
})
```

Lastly, let's make it so that when we click a black list item, it turns red, and vice versa.

Earlier we used `addClass` and `removeClass`. Now we can use `toggleClass`.

```js
$('#addItem').click(function() {
  var $newItem = $('#addToList').val()
  $('#myList').append('<li>' + $newItem + '</li>')
  $('li').click(function() {
    $(this).toggleClass('red')
  })
  $('#addToList').val('')
})
```

## Conclusion

We're going to practice jQuery a lot when we rebuild Rock Paper Scissors in a few minutes, but let's do a quick review first:

1. How do you select elements in jQuery using tag name, class name, or id?
2. What is the jQuery equivalent to this vanilla JavaScript?
	
	```js
	document.getElementById('container').addEventListener('click', function() {
  		console.log('CLICK HAPPENS!')
	})
	```