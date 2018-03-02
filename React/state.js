

How can we add a state to our stateless React elements? 

If we can't encapsulate a state in React elements, then we should encapsulate React elements in something that already has a state. 
Think of a simple state machine that represents a user interface. Every user action triggers a change of a state in that state machine. 
Every state is represented by a different React element. In the React library, this state machine is called a React Component.


stateless React component

var React = require('react');
var ReactDOM = require('react-dom');

var ReactClass = React.createClass({
                    render: function () {
                          return React.createElement('h1', { className: 'header' }, 'ReactComponent');
                    } 
                 });

var reactComponentElement = React.createElement(ReactClass);
var reactComponent = ReactDOM.render(reactComponentElement, document.getElementById('react-application'));


Some of the preceding code should already look familiar to you, and the rest can be broken down into three simple steps:

1. Creating a React class.

2. Creating a React component element.

3. Creating a React component.

Let's take a closer look at how we can create a React component:

1. Create a ReactClass by calling the React.createClass() function and providing a specification object as its parameter. 
   The specification object that you pass as a parameter to React.createClass() is where your component's look and feel is defined. 
   Specification is the de nition of your React component.

2. Create a ReactComponentElement by calling the React.createElement() function and providing our ReactClass as its type parameter. 
   React Element, we learned that the type parameter can be either a string or a ReactClass.

3. Create a ReactComponent by calling the ReactDOM.render() function and providing our ReactComponentElement as its element parameter.


The specification object encapsulates a component's state and describes how a component is rendered. At the very minimum, the React component needs to have a render() method so that it returns at least null or false. Here is an example of a speci cation object in its simplest form:

   
    {
     render: function () {
       return null;
     }
    }

The render() function is responsible for telling React how to render your React component. 
It can return null, as in the preceding example, and nothing will be rendered. Or it can return a ReactElement.

   {
     render: function () {
       return React.createElement('h1', { className: 'header' }, 'ReactComponent');
     } 
   }


This example shows how we can encapsulate our React element inside our React component.

We create a ReactElement of type h1 with the properties object and a ReactText as its only child. Then, we return it when the render() method of our React component is called. 
The fact that we encapsulated our React element inside a React component doesn't affect how it will be rendered:

<h1 class="header" data-reactid=".0">React Component</h1>

The advantage of having a render() function is that, as with any other function, before it returns a value, it can choose what value to return. 

So far, you've seen two examples of the render() function: 

one that returns null and one that returns a React element. We can merge the two and add a condition that decides what to render:

  
   {
     render: function () {
       var elementState = {
           isHidden: true
       };
       if (elementState.isHidden) {
         return null;
       }
       return React.createElement('h1', { className: 'header' }, 'ReactComponent');
      } 
   }




There are two ways to pass data to a render() function using the React API: 

• this.props
• this.state

Any data that you put in the props object and pass to the React.createElement() function can be accessed inside the render() function of ReactComponent via this.props. 

Once you have accessed data from this.props, you can render it:

 
 {
   render: function () {
     var elementState = {
      isHidden: true
     };
     if (elementState.isHidden) {
       return null;
     }
     return React.createElement('h1', { className: 'header' }, this.props.header);
   } 
 }

   {
     render: function () {
       if (this.props.isHidden) {
         return null;
       }
       return React.createElement('h1', { className: 'header' }, this.props.header);
     } 
  }

We can also use this.props to compute data that needs to be rendered: 

   {
     render: function () {
       if (this.props.isHidden) {
         return null;
       }
       var header = this.props.tweets.length + ' Latest Tweets';
       return React.createElement('h1', { className: 'header' }, header);
     }
   }



Creating your first stateful React component

Stateful components are the most appropriate place for your application to handle the interaction logic and manage the state. They make it easier for you to reason out how your application works. This reasoning plays a key role in building maintainable web applications.

React stores the component's state in this.state, and it sets the initial value of this.state to the value returned by the getInitialState() function. 

However, it's up to us to tell React what the getInitialState() function will return.


Let's add this function to our React component:

   {
     getInitialState: function () {
       return {
         isHidden: false
       }; 
     },
     render: function () {
       if (this.state.isHidden) {
           return null;
       }
       return React.createElement('h1', { className: 'header' }, 'ReactComponent');
     } 
   }


Notice that in our render() function, we're now referring to this.state.isHidden instead of this.props.isHidden.

So, what is the difference between the two?

• this.props stores read-only data that is passed from the parent. 
  It belongs to the parent and cannot be changed by its children. 
  This data should be considered immutable.

• this.state stores data that is private to the component. 
  It can be changed by the component. 
  The component will rerender itself when the state is updated.

There is a common way of informing React of a state change using setState(data, callback). This function takes two parameters:

• The data function that represents the next state
• The callback function, which you will rarely need to use because React keeps your user interface up to date for you
  
  How does React keep your user interface up to date? 
  It calls the component's render() function every time you update the component's state, 
  including any child components which are rerendered as well. 
  In fact, it rerenders the entire virtual DOM every time our render() function is called.


