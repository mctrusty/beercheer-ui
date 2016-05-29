/*jshint unused: vars */
define(['angular', 'controllers/main', 'controllers/about', 'services/beersearch', 'controllers/input', 'controllers/contact', 'controllers/header', 'services/store', 'services/beerinput', 'services/brewers']/*deps*/, function (angular, MainCtrl, AboutCtrl, BeerSearchService, InputCtrl, StoreFactory, BeerInputService)/*invoke*/ {
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
			'beercheerApp.controllers.ContactCtrl',
			'beercheerApp.controllers.HeaderCtrl',
			'beercheerApp.services.Store',
			'beercheerApp.services.BeerInput',
			'beercheerApp.services.Brewers',
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
		.when('/contact', {
			templateUrl: 'views/contact.html',
			controller: 'ContactCtrl'
		})
        .otherwise({
          redirectTo: '/'
        });
    });
});
