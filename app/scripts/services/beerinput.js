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
		
		function mapInput(inputBeer)
		{
			var output = {}
			output.store = {googleId: inputBeer.google_id, name: inputBeer.name};
			output.beer = {beer: inputBeer.beer, brewer: inputBeer.brewer};
			return output;
		}
		
		this.setInputData = function(data) {
			_inputData = mapInput(data);
			alert(_inputData.beer.beer);
		}
		
		var baseUrl = 'http://192.168.0.27:3000/api/beer';
		this.callApi = function(){
			var deferred = $q.defer();
			$http.post({baseUrl, data})
			.success(function(data) {
				deferred.resolve(data);
			}).error(function(){
				deferred.reject('Error contacting the API');
			})
			return deferred.promise;
		}
  });
});