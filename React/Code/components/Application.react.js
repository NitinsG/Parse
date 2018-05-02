   var React = require('react');
   var Stream = require('./Stream.react');                //Child 1
   var Collection = require('./Collection.react');        //Child 2
   
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
             <Stream onAddTweetToCollection={this.addTweetToCollection} />  // Child 1
           </div>
           <div className="col-md-8">
             <Collection tweets={this.state.collectionTweets} onRemoveTweetFromCollection={this.removeTweetFromCollection} onRemoveAllTweetsFromCollection={this.removeAllTweetsFromCollection} />     // Child 2
           </div>
          </div>
         </div> );
       }           // End of Render function 
    });

   module.exports = Application;

// ---------------------------------

   var React = require('react');
   var Stream = require('./Stream.react');
   var Collection = require('./Collection.react');
   
   var Application = React.createClass({
     render: function () {
       return (
         <div className="container-fluid">
           <div className="row">
            <div className="col-md-4 text-center">
              <Stream />
            </div>
            <div className="col-md-8">
             <Collection />
          </div>
        </div>
      </div> );
     } 
    });
 
   module.exports = Application;
