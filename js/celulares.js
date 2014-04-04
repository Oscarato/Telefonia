//declaramos la variable 2celular" de tipo angular.module, que servira como modulador de nuestra aplicacion
var celulares = angular.module("celulares", ['ngRoute']);
  

celulares.config(function($routeProvider) {
  $routeProvider
	.when("/nokia1", {
		controller:"nokiaC",
		templateUrl:"nokia/nokia.html"
		
    })

	.when("/motorola1", {
      controller:"motorolaC",
      templateUrl:"motorola.html"
    })

	.when("/samsung1", {
      controller:"samsungC",
      templateUrl:"samsung.html"
    })

	.otherwise({
      redirectTo:"nokia"
    })
})

celulares.controller("nokiaC", function($scope){
	$scope.imagen = "ingrese a nokia";
});

celulares.controller("motorolaC", function($scope,$http)
	{
		$scope.imagen = "ingrese a motorola";	
    	//hacemos uso de $http para obtener los datos de la appi
    	$http.post("http://api-a.vime.com.co/login/?username=oscar.jimenez&password=mett").success(function 			(data) 
		{
			//Convert data to array.
        	//datos lo tenemos disponible en la vista gracias a $scope
        	$scope.datos = data;
		 }			)
	});

celulares.controller("samsungC", function($scope){
	$scope.imagen = "ingrese a samsung1";
});

	//con dataResource inyectamos la factoría
celulares.controller("appController", function ($scope, $http) 
	{
		$scope.enviardatos = function()
			{
				if (!$scope.nombretext||!$scope.passwordtext) {
					alert ("los campos estan vacios")
					}
				$scope.imagen = "estoy en nokia";
			
    	//hacemos uso de $http para obtener los datos del json
    	$http.post("http://api-a.vime.com.co/login/?username="+ $scope.nombretext+ "&password=" + 					$scope.passwordtext).success(function (data) 
		{
			//Convert data to array.
        	//datos lo tenemos disponible en la vista gracias a $scope
        	$scope.datos = data;
		 }									)
    		}	
	}				)


