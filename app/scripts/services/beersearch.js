define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc service
   * @name beercheerApp.BeerSearch
   * @description
   * # BeerSearch
   * Service in the beercheerApp.
   */
  angular.module('beercheerApp.services.BeerSearch', [])
	.service('BeerSearch', function ($http, $q) {
		var baseUrl = 'https://s-beercheer.herokuapp.com/api/brewer?q=';
		var _searchTerm = '';
		var _searchUrl = '';
		
		var makeUrl = function(){
			_searchTerm = _searchTerm.split(' ').join('+');
			_searchUrl = baseUrl + _searchTerm + '&callback=JSON_CALLBACK';
			return _searchUrl;
		}
		
		this.setSearchTerm = function(term){
			_searchTerm = term;
		}
		
		this.getSearchTerm = function() {
			return _searchTerm;
		}
		
		this.callApi = function(){
			makeUrl();
			var deferred = $q.defer();
			$http({
				method: 'JSONP',
				url: _searchUrl
			}).success(function(data) {
				deferred.resolve(data);
			}).error(function(){
				deferred.reject('Error contacting the API');
			})
			return deferred.promise;
		}
	// AngularJS will instantiate a singleton by calling "new" on this function
	});
});
