define(['angular'], function (angular) {
'use strict';

/**
 * @ngdoc service
 * @name beercheerApp.beerinput
 * @description
 * # beerinput
 * Service in the beercheerApp.
 */
angular.module('beercheerApp.services.BeerInput', [])
  .service('BeerInput', function ($http, $q) {
		var _inputData = {};
		
		this.setInputData = function(data) {
			_inputData = data;
			alert('set data');
		}
		
		var baseUrl = 'http://192.168.0.27/api/beer';
		this.callApi = function(){
			var deferred = $q.defer();
			$http({
				method: 'JSONP',
				url: baseUrl
			}).success(function(data) {
				deferred.resolve(data);
			}).error(function(){
				deferred.reject('Error contacting the API');
			})
			return deferred.promise;
		}
  });
});