/*
The ReactDOM.render() method takes three parameters: 
   1. a ReactElement, 
   2. a regular DOMElement, 
   3. a callback function:
   
 ReactDOM.render(ReactElement, DOMElement, callback);

ReactElement is a root element in the tree of ReactNodes that you've created.

A regular DOMElement is a container DOM node for that tree.

The callback is a function executed after the tree is rendered or updated.

*/

/*
JSX

JSX is an optional HTML-like syntax that allows us to create a virtual DOM tree without using the React.createElement() method.

*/

var listOfItems = <ul className="list-of-items">
                       <li className="item-1">Item 1</li>
                       <li className="item-2">Item 2</li>
                       <li className="item-3">Item 3</li>
                  </ul>;
ReactDOM.render(listOfItems, document.getElementById('react-application'));

// Transformation of the JSX syntax into valid JavaScript syntax must happen before our "invalid" JavaScript code is interpreted.

// Babel is used here for the transformation of JSX into valid javascript code even before minifaction.


