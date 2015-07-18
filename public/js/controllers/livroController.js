angular.module('LivroDigital').controller('LivroController', function($scope){

	// FUNÇÕES DE PAGINAÇÃO DAS PÁGINAS
	$scope.paginacaoSeguinte = function(){
		$scope.$broadcast('paginacaoSeguinte');
	};
	$scope.paginacaoAnterior = function(){
		$scope.$broadcast('paginacaoAnterior');
	};

	// FUNÇÕES DE ZOOM DAS PÁGINAS
	$scope.zoomPaginasOut = function(){
		$scope.$broadcast('zoomPaginasOut');
	};
	$scope.zoomPaginasIn = function(){
		$scope.$broadcast('zoomPaginasIn');
	};
});