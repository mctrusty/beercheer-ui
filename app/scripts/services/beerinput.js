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
		
		function mapInput(data)
		{
			//TODO: Add argument checks
			var output = {}
			output.store = {googleId: data.store.googleId, name: data.store.name};
			output.beer = {beer: data.beer, brewer: data.brewer};
			output.price = data.price;
			output.package ={ qty: data.pkg, size: data.pkg_size, container: data.container};
			return output;
		}
		
		this.setInputData = function(data) {
			_inputData = mapInput(data);
		}
		
		var baseUrl = 'http://beercheer-api.herokuapp.com/api/beer';
		this.callApi = function(){
			var deferred = $q.defer();
			$http.post(baseUrl, _inputData)
			.success(function(data) {
				deferred.resolve(data);
			}).error(function(){
				deferred.reject('Error contacting the API');
			})
			return deferred.promise;
		}
  });
});
