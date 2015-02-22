define(['angular', 'googlemaps!'], function (angular, googlemaps) {
  'use strict';

  /**
   * @ngdoc function
   * @name beercheerApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the beercheerApp
   */
  angular.module('beercheerApp.controllers.MainCtrl', ['beercheerApp.services.BeerSearch'])
    .controller('MainCtrl', function ($scope, BeerSearch) {
      $scope.data = {};
	  $scope.searchtext = '';
	  
	  $scope.searchBeer = function() {
		alert('search: ' + $scope.searchtext);
		BeerSearch.setSearchTerm($scope.searchtext);
		
		BeerSearch.callApi()
		.then(function(data){
			$scope.data.beerData = data.results;
			$scope.data.beerCount = data.resultCount;
		}, function(data) {
			alert(data);
		})
	  }
	  
    });
});
