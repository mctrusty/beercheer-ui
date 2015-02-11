define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name beercheerApp.controller:AboutCtrl
   * @description
   * # AboutCtrl
   * Controller of the beercheerApp
   */
  angular.module('beercheerApp.controllers.AboutCtrl', [])
    .controller('AboutCtrl', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
