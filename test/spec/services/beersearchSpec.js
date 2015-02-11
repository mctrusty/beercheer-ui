/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Service: BeerSearch', function () {

    // load the service's module
    beforeEach(module('beercheerApp.services.BeerSearch'));

    // instantiate service
    var BeerSearch;
    beforeEach(inject(function (_BeerSearch_) {
      BeerSearch = _BeerSearch_;
    }));

    it('should do something', function () {
      expect(!!BeerSearch).toBe(true);
    });

  });
});
