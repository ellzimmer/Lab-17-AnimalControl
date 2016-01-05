var app = angular.module('myModule', ['ngRoute']);

app.config(function($routeProvider){
  	$routeProvider
  		.when('/cat', 
  			{
    			templateUrl: 'cat.html',
    			controller: 'animalCtrl'
    		})
 	  	.when('/dog', 
 		   	{
    			templateUrl: 'dog.html',
    			controller: 'animalCtrl'
  			})
 	  	.when('/hedgehog', 
 		   	{
    			templateUrl: 'hedgehog.html',
    			controller: 'animalCtrl'
  			})
 		 .when('/fish', 
 	  		{
    			templateUrl: 'fish.html',
    			controller: 'animalCtrl'
  			})
 		$routeProvider.otherwise( 
 		   	{
    			templateUrl: '404.html',
    			controller: 'animalCtrl'
  	   	});
    });
app.controller('animalCtrl', function(){
});
