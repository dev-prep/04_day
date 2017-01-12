#HTML DOM Manipulation using Vanilla JS

###ROADMAP

* Intro to the DOM
* Selectors in Vanilla JS
* DOM Manipulations
* Event Listenners


## The DOM
![](pic_htmltree.gif)
source: w3 

DOM - the Document Object Model is how we represent the HTML document or webpage that we are looking at. It is organized in a tree-like structure. Selectors in Vanilla JS work differently to in CSS. 


[link](http://www.w3schools.com/js/js_htmldom_document.asp)


##HTML Selectors

`document.getElementById(id)`	Find an element by element id

`document.getElementsByTagName(name)`	Find elements by tag name

`document.getElementsByClassName(name)`	Find elements by class name

##DOM Manipulation

`element.innerHTML =` Change the inner HTML of an element

`element.value` For obtain the value of an input form field

`element.setAttribute(attribute, value)`	Change the attribute value of an HTML element

`element.style.property =` Change the style of an HTML element

##Event Listenners
`addEventListenner(event, functionCall)` This allows you te register an event listenner. 

You can also use `onclick="functionCall()"` in the HTML but this is not considered best practice.