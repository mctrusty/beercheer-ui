define(['angular', 'googlemaps!'], function (angular, googlemaps) {
  'use strict';

  /**
   * @ngdoc function
   * @name beercheerApp.controller:InputCtrl
   * @description
   * # InputCtrl
   * Controller of the beercheerApp
   */
  angular.module('beercheerApp.controllers.InputCtrl', ['ui.bootstrap'])
    .controller('InputCtrl', function ($scope) {
	  
	var input = document.getElementById('storeInput');
	
	var options = {
	  types: ['establishment']
	};

	var ac = new google.maps.places.Autocomplete(input, options);
	
	$scope.isCollapsed = false;
	
	$scope.beer = {};
      $scope.awesomeThings = [
        'google maps',
        'AngularJS',
        'Karma'
      ];
    });
});
