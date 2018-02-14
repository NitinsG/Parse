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
        {{providerS}}
        <br/><br/>
        {{match}}

	<script>

		var app = angular.module( 'app', [] );
      
                app.service('helloService', function() {
                             this.sayHello = function() {
                                                   return "Hello, World!";
                                             };
                });

		var MyFunc = function() {

			this.name = "default name";

			this.$get = ['helloService', function(helloService){ return helloService;}];

			return "Hello from MyFunc(). this.name = " + this.name;
		};


		// returns the function's return value
		app.factory( 'myFactory', MyFunc );

		// returns the output of the function's $get function
		app.provider( 'myProv', MyFunc );

		function MyCtrl( $scope, helloService, myFactory, myProv ) {

			$scope.serviceOutput = "myService = " + helloService;
			$scope.factoryOutput = "myFactory = " + myFactory;
 			$scope.providerOutput = "myProvider = " + myProv;
                        $scope.providerS = "myProvider HelloService = " + myProv.sayHello();
                        if(helloService === myProv){
                              $scope.match = "Matching";
                        }else{
                              $scope.match = "Not Matching";
                        }           

		}

	</script>

</body>
</html>

/*Output

myService = [object Object] 

myFactory = Hello from MyFunc(). this.name = default name 

myProvider = [object Object] 

myProvider HelloService = Hello, World!

Matching
*/
