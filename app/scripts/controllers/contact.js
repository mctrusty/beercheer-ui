define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name beercheerApp.controller:AboutCtrl
   * @description
   * # AboutCtrl
   * Controller of the beercheerApp
   */
  angular.module('beercheerApp.controllers.ContactCtrl', [])
    .controller('ContactCtrl', function ($scope) {
      $scope.isActive = function (viewLocation) {
		  var active = (viewLocation === $location.path());
		  return active;
		};
    });
});