/*
Syntax: module.service( 'serviceName', function ); 
Result: When declaring serviceName as an injectable argument you will be provided with an instance of the function. 
In other words new FunctionYouPassedToService()
*/

/*
Syntax: module.factory( 'factoryName', function ); 
Result: When declaring factoryName as an injectable argument you will be provided with the value that is returned by invoking the function reference passed to module.factory
*/

/*
Syntax: module.provider( 'providerName', function ); 
Result: When declaring providerName as an injectable argument you will be provided with (new ProviderFunction()).$get(). The constructor function is instantiated before the $get method is called - ProviderFunction is the function reference passed to module.provider.

Providers have the advantage that they can be configured during the module configuration phase.
*/

<!DOCTYPE html>
<html ng-app="app">
<head>
	<script src="http://cdnjs.cloudflare.com/ajax/libs/angular.js/1.0.1/angular.min.js"></script>
	<meta charset=utf-8 />
	<title>JS Bin</title>
</head>
<body ng-controller="MyCtrl">
	{{serviceOutput}}
	<br/><br/>
	{{factoryOutput}}
	<br/><br/>
	{{providerOutput}}
         <br/><br/>
	{{providerAgain}}

	<script>

		var app = angular.module( 'app', [] );

		var MyFunc = function() {

			this.name = "default name";

			this.$get = function() {
				this.name = "new name"
				return "Hello from MyFunc.$get(). this.name = " + this.name;
			};

			return "Hello from MyFunc(). this.name = " + this.name;
		};

		// returns the actual function
		app.service( 'myService', MyFunc );

		// returns the function's return value
		app.factory( 'myFactory', MyFunc );

		// returns the output of the function's $get function
		app.provider( 'myProv', MyFunc );

		function MyCtrl( $scope, myService, myFactory, myProv ) {

			$scope.serviceOutput = "myService = " + myService;       // Just returned the Object as created with new
			$scope.factoryOutput = "myFactory = " + myFactory;       // Just retuned the text in last return statment
			$scope.providerOutput = "myProvider = " + myProv;        // it first calls (new MyFunc).$get function.
                        $scope.providerAgain = "myProviderAgain = " + myProv;    // it again calls the $get using instance of provider method
		}

	</script>

</body>
</html>

/*
Output:
myService = [object Object] 

myFactory = Hello from MyFunc(). this.name = default name 

myProvider = Hello from MyFunc.$get(). this.name = new name

myProviderAgain = Hello from MyFunc.$get(). this.name = new name
*/


