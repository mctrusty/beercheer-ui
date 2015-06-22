'use strict';

describe('Service: beerinput', function () {

  // load the service's module
  beforeEach(module('beercheerApp'));

  // instantiate service
  var beerinput;
  beforeEach(inject(function (_beerinput_) {
    beerinput = _beerinput_;
  }));

  it('should do something', function () {
    expect(!!beerinput).toBe(true);
  });

});
