// Inicia o projeto
var app = angular.module('myApp', []);
	// Pego os valores digitados nos inputs
	app.controller('costCtrl', function($scope) {
		$scope.valor1 = 0;
		$scope.valor2 = 0;
		$scope.valor3 = 0;
		$scope.valor4 = 0;
		$scope.qtd = 1;

	// Faço um função que calcula a soma dos valores e multiplica pela quantidade
	$scope.total = function(){
		$resultado = (($scope.valor1 + $scope.valor2 + $scope.valor3 + $scope.valor4) * $scope.qtd)
	    	return $resultado;
	};
	    
	 //    $scope.desconto = function($q){
	 //    if($q > 100){
	 //     $j = (($q * 10) / 100);
	 //     $scope.desconto = $q - $j;
	 //    }
	 //    return $scope.desconto;
	// };

});