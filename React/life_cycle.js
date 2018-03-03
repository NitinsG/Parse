/*
This process has various stages, for example, before render, render, after render, and so on. In React, this process is called the component's lifecycle. 
Each React component goes through this process. 
What we want is a way to hook into that process, and call our own functions at different stages of that process in order to have a greater control over it.
For this purpose, React provides a number of methods that we can use to get notified when a certain stage in a component's lifecycle process occurs. 
These methods are called the component's lifecycle methods.

All the React component's lifecycle methods can be grouped into three phases:

• Mounting: This phase occurs when a component is being inserted into the DOM
• Updating: This phase occurs when a component is being re-rendered into a virtual DOM to figure out if the actual DOM needs to be updated
• Unmounting: This phase occurs when a component is being removed from the DOM

*/

StreamTweet.react.js

   var React = require('react');
   var ReactDOM = require('react-dom');
   var Header = require('./Header.react');
   var Tweet = require('./Tweet.react');
   
   var StreamTweet = React.createClass({

    getInitialState: function () {
      console.log('[Snapterest] StreamTweet: 1. Running getInitialState()');
      return {
         numberOfCharactersIsIncreasing: null,
         headerText: null
      }; 
    }, 
    
    componentWillMount: function () {
      console.log('[Snapterest] StreamTweet: 2. Running componentWillMount()');
      this.setState({
         numberOfCharactersIsIncreasing: true,
         headerText: 'Latest public photo from Twitter'
      });
      window.snapterest = {
         numberOfReceivedTweets: 1,
         numberOfDisplayedTweets: 1
      }; 
    },
 
    componentDidMount: function () {
      console.log('[Snapterest] StreamTweet: 3. Running componentDidMount()');
      var componentDOMRepresentation = ReactDOM.findDOMNode(this);
      window.snapterest.headerHtml = componentDOMRepresentation.children[0].outerHTML;
      window.snapterest.tweetHtml = componentDOMRepresentation.children[1].outerHTML;
    },
   
    componentWillUnmount: function () {
     console.log('[Snapterest] StreamTweet: 8. Running componentWillUnmount()');
     delete window.snapterest;
    }, 

    render: function () {
       console.log('[Snapterest] StreamTweet: Running render()');
       return (
         <section>
           <Header text={this.state.headerText} />
           <Tweet tweet={this.props.tweet} onImageClick={this.props.onAddTweetToCollection} />
         </section>
        ); 
      }
    });

   module.exports = StreamTweet;

/*
There are four function of mounting :

 • getInitialState()
 • componentWillMount()
 • render()
 • componentDidMount()

 • getInitialState()
   The getInitialState() method is invoked  first. It is invoked before React inserts a component into the DOM. 
   If you want your component to have a state, then use this method to return the initial component's state.
   As with all the mounting methods, getInitialState() will be called only once.

 • componentWillMount()
   The componentWillMount() method is invoked second. It is invoked immediately before React inserts a component into the DOM.
   It is called before render(), therefore calling setState() synchronously in this method will not trigger an extra rendering.
   Avoid introducing any side-effects or subscriptions in this method. For those use cases, use componentDidMount() instead.

 • componentDidMount() 
   This is invoked immediately after a component is mounted. 
   Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place 
   to instantiate the network request.
   This method is a good place to set up any subscriptions. If you do that, don’t forget to unsubscribe in componentWillUnmount().

   Calling setState() in this method will trigger an extra rendering, but it will happen before the browser updates the screen. 
   This guarantees that even though the render() will be called twice in this case, the user won’t see the intermediate state. 
   Use this pattern with caution because it often causes performance issues. It can, however, be necessary for cases like modals and 
   tooltips when you need to measure a DOM node before rendering something that depends on its size or position.

   This is called the React component's mounting phase. It's executed only once, unless we unmount a component and mount it again.
*/

/*

 One of the greatest bene ts of using JSX is that we can easily identify how many child elements our component will have just by looking 
 at the component's render() method. Here, we can see that a parent <section> element has two child components: <Header /> and <Tweet />.

*/

/*

There is one method for Unmouting:

 • componentWillUnmount
   This is invoked immediately before a component is unmounted and destroyed. 
   Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, 
   or cleaning up any subscriptions that were created in componentDidMount().    
   You can think of the componentDidMount() and componentWillUnmount() methods as a two-step mechanism for integrating the React component 
   with another JavaScript API:
   1. Initialize it in the componentDidMount() method
   2. Terminate it in the componentWillUnmount() method
   This way your external JavaScript libraries that need to work with the DOM will stay in sync with the DOM rendered by React.

*/
