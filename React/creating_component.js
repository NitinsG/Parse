/*

Creating a container React component

*/

app.js

   var React = require('react');
   var ReactDOM = require('react-dom');
   var Application = require('./components/Application.react');
   ReactDOM.render(<Application />, document.getElementById('react-application'));


application.react.js

   var React = require('react');
   var Stream = require('./Stream.react');
   var Collection = require('./Collection.react');
   
   var Application = React.createClass({
     
     getInitialState: function () {
       return {
         collectionTweets: {}
       };
     },
     
     addTweetToCollection: function (tweet) {
       var collectionTweets = this.state.collectionTweets;
       collectionTweets[tweet.id] = tweet;
       this.setState({
         collectionTweets: collectionTweets
       }); 
     },

     removeTweetFromCollection: function (tweet) {
       var collectionTweets = this.state.collectionTweets;
       delete collectionTweets[tweet.id];
       this.setState({
         collectionTweets: collectionTweets
       }); 
     },

     removeAllTweetsFromCollection: function () {
       this.setState({
         collectionTweets: {}
       });
     },

     render: function () {
       return (
         <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 text-center">
               <Stream onAddTweetToCollection={this.addTweetToCollection} />
            </div>
            <div className="col-md-8">
            <Collection tweets={this.state.collectionTweets} onRemoveTweetFromCollection={this.removeTweetFromCollection} onRemoveAllTweetsFromCollection={this.removeAllTweetsFromCollection} />
             </div>
           </div>
         </div> );
       } 
   });

module.exports = Application;

/*

Notice that the Collection component cannot directly mutate the Application component's state. 
The Collection component has read-only access to that state via this.props object, 
and the only way to update the parent component's state is to call the callback functions that are passed by the parent component. 
In the Collection component, these callback functions are this.props.onRemoveTweetFromCollection and this.props. onRemoveAllTweetsFromCollection.

*/

// Let's start by creating the Stream.react.js  

   var React = require('react');
   var SnapkiteStreamClient = require('snapkite-stream-client');
   var StreamTweet = require('./StreamTweet.react');
   var Header = require('./Header.react');
   
   var Stream = React.createClass({
     
     getInitialState: function () {
       return {
          tweet: null 
       }
     },
     
     componentDidMount: function () {
       SnapkiteStreamClient.initializeStream(this.handleNewTweet);
     },
     
     componentWillUnmount: function () {
       SnapkiteStreamClient.destroyStream();
     },

     handleNewTweet: function (tweet) {
       this.setState({
           tweet: tweet
       });
     },

     render: function () {      
        var tweet = this.state.tweet;
        if (tweet) {
           return (<StreamTweet tweet={tweet} onAddTweetToCollection={this.props.onAddTweetToCollection} />); 
        }
        return (<Header text="Waiting for public photos from Twitter..." />); 
      }
   });
 
   module.exports = Stream;

/*
The componentDidMount() method is part of React's API. It's one of the React component's lifecycle methods. 
It's called only once, immediately after React has finished the initial rendering of our component. 
At this point, React has created a DOM tree, which is represented by our component, and now we can access that DOM with another JavaScript library.
componentDidMount() is a perfect place for integrating React with another JavaScript library. 
*/






