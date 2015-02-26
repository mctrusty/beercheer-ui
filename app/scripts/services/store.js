define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc service
   * @name beercheerApp.Store
   * @description
   * # Store
   * Factory in the beercheerApp.
   */
  angular.module('beercheerApp.services.Store', [])
    .factory('Store', function () {

		function Store(name, address, googleId) {
			// Public properties, assigned to the instance ('this')
			this.name = name;
			this.address = address;
			this.googleId = googleId;
		}
		  
		  /**
	   * Static method, assigned to class
	   * Instance ('this') is not available in static context
	   */
		Store.build = function (data) {
			return new Store(
			  data.name,
			  data.formatted_address,
			  data.place_id
			);
		};

		return Store;
    });
});
