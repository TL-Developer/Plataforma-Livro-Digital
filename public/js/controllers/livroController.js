angular.module('LivroDigital').controller('LivroController', function($scope){

	$scope.paginacaoSeguinte = function(){
		paginacaoSeguinte();
	};

	$scope.paginacaoAnterior = function(){
		paginacaoAnterior();
	};

	$scope.zoomPdfOut = function(){
		zoomPdfOut();
	};

	$scope.zoomPdfIn = function(){
		zoomPdfIn();
	};
});