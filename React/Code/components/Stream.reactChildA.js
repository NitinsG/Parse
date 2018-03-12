   var React = require('react');
   var SnapkiteStreamClient = require('snapkite-stream-client');  //Third Party Library
   var StreamTweet = require('./StreamTweet.react');   //Child of Stream: 1
   var Header = require('./Header.react');            // Child of Stream: 2
   
   var Stream = React.createClass({
     
      getInitialState: function () {
        return { tweet: null }
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
