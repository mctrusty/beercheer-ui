/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Service: Store', function () {

    // load the service's module
    beforeEach(module('beercheerApp.services.Store'));

    // instantiate service
    var Store;
    beforeEach(inject(function (_Store_) {
      Store = _Store_;
    }));

    it('should do something', function () {
      expect(!!Store).toBe(true);
    });

  });
});
