/* Isolated Scopes 

Isolate scope is entirely managed within the scope attribute in the directive's returned definition object. 
Using @, =, and &, you are instructing the directive to ignore the scopes  it would normally inherit, 
and only utilize data, variables, and methods that you have provided interfaces for instead.

*/

(index.html)
  <div ng-app="myApp">
    <div ng-controller="MainCtrl">
     <div iso></div>
    </div>
  </div>

(app.js)
 angular.module('myApp', [])
   .controller('MainCtrl', function ($log, $scope) {
        $scope.outerval = 'mydata';
        $scope.func = function () {
            $log.log('invoked!');
        };
   })
   .directive('iso', function () {
         return {};
   });


//To declare a directive with an isolate scope, simply pass an empty object literal as the scope property:

  .directive('iso', function () {
     return {
        scope: {}
     };
  });

//With this, there will be no inheritance from the parent scope in MainCtrl, and the directive will be unable to use methods or variables in the parent scope.

/* 
To pass a read-only value to the directive, you will use @ inside the isolate scope declaration to indicate that a named attribute of the relevant HTML element contains a value
that should be incorporated into the directive's isolate scope. 
*/
  <div ng-app="myApp">
    <div ng-controller="MainCtrl">
       <div>Outer: {{ outerval }}</div>
       <div iso myattr="{{ outerval }}"></div>             //outerval value assgined to myattr attibute, value passed from the index.html
    </div>
  </div>
  

  .directive('iso', function () {
     return {
         template: 'Inner: {{ innerval }}',
         scope: {
             innerval: '@myattr'
         }
     };
  });

/*
For databinding use =
*/

 ...
  <div iso myattr="outerval"></div>
 ...

 
 .directive('iso', function () {
   return {
       template: 'Inner: {{ innerval }}',
       scope: {
         innerval: '=myattr'
       }
   };
 });

/* 
You are instructing the child directive scope to examine the parent controller scope,and bind the parent outerval attribute inside the child scope, aliased as the innerval
attribute. Full data binding between scopes is supported, and all unnamed attributes and methods in the parent scope are ignored.
*/

/*
Methods can also be pulled down from the parent scope for use in the directive. In the same way that a model variable can be bound to the child scope, you can
alias methods that are defined in the parent scope to be invoked from the child scope but are still in the parent scope context. 
This is accomplished with the & definition, as follows:
*/

  <div ng-app="myApp">
    <div ng-controller="MainCtrl">
      <div iso myattr="func()"></div>
    </div>
  </div>

  .directive('iso', function () {
     return {
        scope: {
          innerval: '&myattr'
        },
        link: function(scope) {
        scope.innerval();   // invoked!
        }
     };
  });
