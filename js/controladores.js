mett.controller("logueoC", function($scope,$http,$location)
{
	$scope.enviardatos = function()
			{
				if (!$scope.nombretext||!$scope.passwordtext) {
					alert ("Ninguno de los campos debe estar vacios")
					} else {
						//hacemos uso de $http para obtener los datos del json
						$http.post("http://api-a.vime.com.co/login/?username="+ $scope.nombretext+ "&password=" 						+ $scope.passwordtext).success(function (data, status) 
							{
							//Convert data to array.
							//datos lo tenemos disponible en la vista gracias a $scope
							$scope.datos = data;
							$scope.status = status;
							alert("Datos Correctos")	
							localStorage.setItem('cookie', $scope.datos.cookie);
							localStorage.setItem('id', $scope.datos.user_id);
							localStorage.setItem('nombre', $scope.datos.descripcion.nombre);
							localStorage.setItem('cargo', $scope.datos.descripcion.cargo);
							localStorage.setItem('cedula', $scope.datos.descripcion.cedula);
							$location.path("/Bienvenido");
							 }						)
						.error(function (status)
							{
								alert("Usuario o Clave Incorrecto")
								$scope.status = status;
							}						)
    						}
			}	
}				)

				
						
mett.controller("estadoC", function($scope,$http)
{
	cookie = localStorage.getItem('cookie');
	Id = localStorage.getItem('id');
    //hacemos uso de $http para obtener los datos de la appi
    $http.get("http://api-a.vime.com.co/login/update/?user_id="+Id+"&cookie="+cookie).success(			function (data, status) 
		{
			//Convert data to array.
        	//datos lo tenemos disponible en la vista gracias a $scope
        	$scope.datos = data;
		}			)
}				)


mett.controller("mensajeC", function($scope, $http){
				
				$scope.imagen = "ingrese a mensajes";
				cookie = localStorage.getItem('cookie');
				Id = localStorage.getItem('id');
				
				$scope.Enviar = function () {
				Cuerpo = $scope.MessageText
				Asunto = $scope.DeText
				Para = $scope.ParaText
				$scope.Mensajenvio = 
  			  {
  				  "autor": Para, 
  				  "titulo": Asunto, 
  				  "cuerpo": Cuerpo, 
  				  "tipo": "informacion"
				}
        $http({
            url: "http://api-a.vime.com.co/mensaje/?user_id="+Id+"&cookie="+cookie,
            method: "POST",
            data: $scope.Mensajenvio
        }).success(function (data, status, headers, config) {
            $scope.MessageStatus  = $scope.Mensajenvio
        }).error(function() {
            $scope.MessageStatus = 'Mensaje no enviado';
            
        });
				}

				
})


mett.controller("bienvenidoC", function($scope, $http){
	$scope.imagen = "Welcome";
	$scope.nombre = localStorage.getItem("nombre")
    $scope.cargo = localStorage.getItem("cargo")
	$scope.cedula = localStorage.getItem("cedula")
}				)
