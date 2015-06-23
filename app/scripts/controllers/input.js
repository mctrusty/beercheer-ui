define(['angular', 'googlemaps!'], function (angular, googlemaps) {
  'use strict';

  /**
   * @ngdoc function
   * @name beercheerApp.controller:InputCtrl
   * @description
   * # InputCtrl
   * Controller of the beercheerApp
   */
  angular.module('beercheerApp.controllers.InputCtrl', ['ui.bootstrap', 'beercheerApp.services.Store', 'beercheerApp.services.BeerInput'])
    .controller('InputCtrl', function ($scope, Store, BeerInput) {
	
		$scope.beer = { google_id: '', store_name: '', price: 0.00, beer: '', brewer: '', pkg: 0, pkg_size: 12.0, container: 'bottle'};
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
		
		$scope.packages = ["6er", "12er", "case"];
		$scope.containers = ["bottles", "cans", "keg"];
		$scope.sizes = ["12oz", "22oz", "330mL"];
		$scope.isCollapsed = false;
		
		$scope.inputBeer = function(){
			alert('sending...');
			BeerInput.setInputData($scope.beer);
		}

    });
});
