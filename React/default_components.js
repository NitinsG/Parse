Header.react.js

 var React = require('react');
 var headerStyle = {
     fontSize: '16px',
     fontWeight: '300',
     display: 'inline-block',
     margin: '20px 10px'
 };
 var Header = React.createClass({
   getDefaultProps: function () {
      return {
         text: 'Default header'
       };
    },
    render: function () {
       return (<h2 style={headerStyle}>{this.props.text}</h2>);
    } 
 });

module.exports = Header;

/*

In React, we can de ne the CSS rules in a JavaScript object, and then pass that object as a value to the React element's style property. 
For example, in this component, we de ne the headerStyle variable that references an object where:

 • Each object key is a CSS property
 • Each object value is a CSS value

The CSS properties that contain a hyphen in their names should be converted to the CamelCase style; for example, font-size becomes fontSize, 
font-weight becomes fontWeight, and so on.

Our Header component has one method that we haven't discussed yet, that is, getDefaultProps(). 
What if you forget to pass a property that a React component depends on? 
In that case, a component can set the default properties using the getDefaultProps() method.

*/

Tweet.react.js 

   var React = require('react');
   var tweetStyle = {
     position: 'relative',
     display: 'inline-block',
     width: '300px',
     height: '400px',
     margin: '10px'
   };
   
   var imageStyle = {
     maxHeight: '400px',
     boxShadow: '0px 1px 1px 0px #aaa',
     border: '1px solid #fff'
   };
   
   var Tweet = React.createClass({
     propTypes: {
       tweet: function(properties, propertyName, componentName) {
         var tweet = properties[propertyName];
         if (! tweet) {
           return new Error('Tweet must be set.');
         }
         if (! tweet.media) {
           return new Error('Tweet must have an image.');
         } 
       },
        onImageClick: React.PropTypes.func
     },
   
    handleImageClick: function () {
       var tweet = this.props.tweet;
       var onImageClick = this.props.onImageClick;
       if (onImageClick) {
         onImageClick(tweet);
       } 
     },
     
     render: function () {
       var tweet = this.props.tweet;
       var tweetMediaUrl = tweet.media[0].url;
       return (
         <div style={tweetStyle}>
           <img src={tweetMediaUrl} onClick={this.handleImageClick} style={imageStyle} />
         </div> );
      } 
   });
   
   module.exports = Tweet;

 
     

