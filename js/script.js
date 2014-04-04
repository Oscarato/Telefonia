//declaramos la variable 2celular" de tipo angular.module, que servira como modulador de nuestra aplicacion
var mett = angular.module("mett", ['ngRoute']);
  

mett.config(function($routeProvider) {
  $routeProvider
	.when("/Logueo", {
		controller:"logueoC",
		templateUrl:"templates/Logueo.html"
		
    })

	.when("/Estado", {
      controller:"estadoC",
      templateUrl:"templates/Estado.html"
    })

	.when("/Mensaje", {
      controller:"mensajeC",
      templateUrl:"templates/Mensaje.html"
    })

	.otherwise({
      redirectTo:"logueo"
    })
})


