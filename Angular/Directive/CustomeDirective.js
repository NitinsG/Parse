/*
  AngularJS actively compiles the template, searching for matches to defined directives.
  It's possible to chain directive forms together within the same definition. The mydir directive with restrict: 'EACM' can appear as follows:
  
  <mydir></mydir>
  <div mydir></div>
  <div class="mydir"></dir>
  <!-- directive: mydir -->
*/

// example 

angular.module('myApp', [])
.directive('myDirective', function() {
 // return the directive definition object
 return {
 // only match this directive to element tags
 restrict: 'E',
 // insert the template matching 'my-template.html'
 templateUrl: 'my-template.html'
 };
});

<!-- specify root element of application -->
 <div ng-app="myApp">
  <!-- register 'my-template.html' with $templateCache -->
  <script type="text/ng-template" id="my-template.html">
  <div ng-repeat="num in [1,2,3,4,5]">{{ num }}</div>
  </script>

  <!-- your custom element -->
  <my-directive></my-directive>
 </div>

/*
When AngularJS encounters an instance of a custom directive in the index.html template, it will compile the directive into HTML that makes sense to the browser, 
which will look as follows:
*/

<div>1</div>
<div>2</div>
<div>3</div>
<div>4</div>
<div>5</div>
