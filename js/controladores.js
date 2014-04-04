mett.controller("logueoC", function($scope,$http)
{
	$scope.enviardatos = function()
			{
				if (!$scope.nombretext||!$scope.passwordtext) {
					alert ("los campos estan vacios")
					}
    	//hacemos uso de $http para obtener los datos del json
    	$http.post("http://api-a.vime.com.co/login/?username="+ $scope.nombretext+ "&password=" + 					$scope.passwordtext).success(function (data) 
		{
			//Convert data to array.
        	//datos lo tenemos disponible en la vista gracias a $scope
        	$scope.datos = data;
			localStorage.setItem('cookie', $scope.datos.cookie);
			localStorage.setItem('id', $scope.datos.user_id);
		 }									)
    		}	
});


mett.controller("estadoC", function($scope,$http)
{
	cookie = localStorage.getItem('cookie');
	Id = localStorage.getItem('id');
	
    //hacemos uso de $http para obtener los datos de la appi
    $http.get("http://api-a.vime.com.co/login/update/?user_id="+Id+"&cookie="+cookie).success(function 			(data) 
		{
			//Convert data to array.
        	//datos lo tenemos disponible en la vista gracias a $scope
        	$scope.datos = data;
		}			)
});


mett.controller("mensajeC", function($scope){
	$scope.imagen = "ingrese a samsung1";
});
