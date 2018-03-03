/*
There are two types of events that we're interested in:

• User events: When a user types, clicks, scrolls, resizes, and so on
• Server events: When an application receives data or an error from a server, among others

What happens while handling these events? Usually, we update the data that our application depends on, and that data represents a state of our data model. In turn, when a state of our data model changes, we might want to reflect this change by updating a state of our UI.

One of the ways to sync your application's UI state with an underlying data model's state is two-way data binding. 
There are different types of two-way data binding. One of them is key-value observing (KVO), which is used in Ember.js, Knockout, 
Backbone, and iOS, among others. Another one is dirty checking, which is used in Angular.

React offers a different solution called the virtual DOM. The virtual DOM is a fast, in-memory representation of the real DOM, and it's an abstraction that allows us to treat JavaScript and DOM as if they were reactive.

Let's take a look at how it works:

1. Whenever the state of your data model changes, the virtual DOM and React will rerender your UI to a virtual DOM representation.

2. React then calculates the difference between the two virtual DOM representations: the previous virtual DOM representation that was computed before the data was changed and the current virtual DOM representation that was computed after the data was changed. This difference between the two virtual DOM representations is what actually needs to be changed in the real DOM.

3. React updates only what needs to be updated in the real DOM.

Browserify that allows us to import all the dependency modules for our application using the require() function. We'll be using require() to import the React library as well, which means that, instead of adding a <script> tag to our index.html, we'll be using the npm install command to install React:
*/

npm install --save react@0.14.0-beta3 react-dom@0.14.0-beta3

app.js

var React = require('react');
var ReactDOM = require('react-dom');

/*
Just like the DOM is a tree of nodes, React's virtual DOM is a tree of React nodes. 
One of the core types in React is called ReactNode. It's a building block for a virtual DOM, and it can be any one of these core types:

• ReactElement: This is the primary type in React. It's a light, stateless, immutable, virtual representation of a DOM Element.
• ReactText: This is a string or a number. It represents textual content and it's a virtual representation of a Text Node in the DOM.

ReactElements and ReactTexts are ReactNodes. An array of ReactNodes is called a ReactFragment.
*/

var reactElement = React.createElement('h1');
ReactDOM.render(reactElement, document.getElementById('react-application'));

<h1 data-reactid=".0"></h1>

/*
The entry point to the React library is the React object. 
This object has a method called createElement() that takes three parameters: type, props, and children:

React.createElement(type, props, children);

type: 
The type parameter can be either a string or a ReactClass. A string could be an HTML tag name such as 'div', 'p', 'h1', and so on.
A ReactClass is created via the React.createClass()

props: 
The props parameter is a JavaScript object passed from a parent element to a child element (and not the other way around) with some properties that are considered immutable, that is, those that should not be changed. we can pass the props object with properties that represent the HTML attributes such as class, style, and so on.

var reactElement = React.createElement('h1', { className: 'header' });
ReactDOM.render(reactElement, document.getElementById('react-application'));

 <h1 class="header" data-reactid=".0"></h1>

Notice that we name our property className rather than class. The reason is that the class keyword is reserved in JavaScript. If you use class as a property name, it will be ignored by React, and a helpful warning message will be printed on the web browser's console:
Warning: Unknown DOM property class. Did you mean className? Use className instead.

children:
The children parameter describes what child elements this element should have, if any. A child element can be any type of ReactNode: a virtual DOM element represented by a ReactElement, a string or a number represented by a ReactText, or an array of other ReactNodes, which is also called ReactFragment.

*/

var reactElement = React.createElement('h1', { className: 'header' }, 'This is React');
ReactDOM.render(reactElement, document.getElementById('react-application'));

 <h1 class="header" data-reactid=".0">This is React</h1>

var h1 = React.createElement('h1', { className: 'header', key: 'header' }, 'This is React');
var p = React.createElement('p', { className: 'content', key: 'content' }, "And that's how it works.");
var reactFragment = [ h1, p ];
var section = React.createElement('section', { className: 'container' }, reactFragment);
ReactDOM.render(section, document.getElementById('react-application'));

/*
We've created three React elements: h1, p, and section. h1 and p both have child text nodes, "This is React" and "And that's how it works.", respectively. 
The section has a child that is an array of two ReactElements, h1 and p, called reactFragment. 
This is also an array of ReactNodes. 
Each ReactElement in the reactFragment array must have a key property that helps React to identify that ReactElement. 
As a result, we get the following HTML markup:
*/   
   <section class="container" data-reactid=".0">
     <h1 class="header" data-reactid=".0.$header">This is React</h1>
     <p class="content" data-reactid=".0.$content">And that's how it works.</p>
   </section>


var listItemElement1 = React.createElement('li', { className: 'item-1', key: 'item-1' }, 'Item 1');
var listItemElement2 = React.createElement('li', { className: 'item-2', key: 'item-2' }, 'Item 2');
var listItemElement3 = React.createElement('li', { className: 'item-3', key: 'item-3' }, 'Item 3');
var reactFragment = [ listItemElement1, listItemElement2, listItemElement3 ];
var listOfItems = React.createElement('ul', { className: 'list-of-items' }, reactFragment);
ReactDOM.render(listOfItems, document.getElementById('react-application'));

<ul class="list-of-items" data-reactid=".0">
     <li class="item-1" data-reactid=".0.$item-1">Item 1</li>
     <li class="item-2" data-reactid=".0.$item-2">Item 2</li>
     <li class="item-3" data-reactid=".0.$item-3">Item 3</li>
</ul>


