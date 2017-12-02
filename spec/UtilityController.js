'use strict';

angular.module('utilityModule', [])

.controller('UtilityController', function($scope) {
  // Just created for testing Karma Auto Unit Test
  $scope.count = 0;

  $scope.add = function() {
    $scope.count += 1;
  };
});
