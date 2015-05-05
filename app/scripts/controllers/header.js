define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name beercheerApp.controller:HeaderCtrl
   * @description
   * # AboutCtrl
   * Header Controller for the beercheerApp
   */
  angular.module('beercheerApp.controllers.HeaderCtrl', [])
    .controller('HeaderCtrl', function ($scope, $location) {
      $scope.isActive = function (viewLocation) { 
			return viewLocation === $location.path();
		};
    });
});
