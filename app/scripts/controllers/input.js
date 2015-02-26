define(['angular', 'googlemaps!'], function (angular, googlemaps) {
  'use strict';

  /**
   * @ngdoc function
   * @name beercheerApp.controller:InputCtrl
   * @description
   * # InputCtrl
   * Controller of the beercheerApp
   */
  angular.module('beercheerApp.controllers.InputCtrl', ['ui.bootstrap', 'beercheerApp.services.Store'])
    .controller('InputCtrl', function ($scope, Store) {
	
	$scope.beer = {};
	$scope.store = new Store('', '', '');
	
	var input = document.getElementById('storeInput');
	var options = {
	  types: ['establishment']
	};

	var ac = new google.maps.places.Autocomplete(input, options);
	google.maps.event.addListener(ac, 'place_changed', function(){
		var place = ac.getPlace();
		$scope.store = Store.build(place);
	});
	
	$scope.isCollapsed = false;

    });
});
