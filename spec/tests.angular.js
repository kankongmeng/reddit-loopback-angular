'use strict';

describe('Utility Controller', function() {
  beforeEach(angular.mock.module('utilityModule'));
  var $controller;

  beforeEach(inject(function(_$controller_) {
    $controller = _$controller_;
  }));

  describe('$scope', function() {
    it('adds one', function() {
      var $scope = {};
      var controller = $controller('UtilityController', {
        $scope: $scope,
      });
      $scope.add();
      expect($scope.count).toEqual(1);
    });
  });
});
