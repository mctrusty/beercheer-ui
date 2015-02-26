/*jshint unused: vars */
define(['angular', 'controllers/main', 'controllers/about', 'services/beersearch', 'controllers/input', 'services/store']/*deps*/, function (angular, MainCtrl, AboutCtrl, BeerSearchService, InputCtrl, StoreFactory)/*invoke*/ {
  'use strict';

  /**
   * @ngdoc overview
   * @name beercheerApp
   * @description
   * # beercheerApp
   *
   * Main module of the application.
   */
  return angular
    .module('beercheerApp', ['beercheerApp.controllers.MainCtrl',
'beercheerApp.controllers.AboutCtrl',
'beercheerApp.services.BeerSearch',
'beercheerApp.controllers.InputCtrl',
'beercheerApp.services.Store',
/*angJSDeps*/
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ngAnimate',
    'ngTouch'
  ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        })
        .when('/about', {
          templateUrl: 'views/about.html',
          controller: 'AboutCtrl'
        })
		.when('/input', {
			templateUrl: 'views/input.html',
			controller: 'InputCtrl'
		})
        .otherwise({
          redirectTo: '/'
        });
    });
});
