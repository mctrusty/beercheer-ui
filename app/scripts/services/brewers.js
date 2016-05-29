define(['angular'], function (angular) {
'use strict';

/**
 * @ngdoc service
 * @name beercheerApp.beerinput
 * @description
 * # beerinput
 * Service in the beercheerApp.
 */
angular.module('beercheerApp.services.Brewers', [])
  .service('Brewers', function ($http, $q) {
		
		this.setInputData = function(data) {
			_inputData = mapInput(data);
		}
		
		var baseUrl = 'http://192.168.0.11:3000/api/brewers';
		this.callApi = function(){
			var deferred = $q.defer();
			$http.get(baseUrl)
			.success(function(data) {
				deferred.resolve(data);
			}).error(function(){
				deferred.reject('Error contacting the API');
			})
			return deferred.promise;
		}
  });
});
