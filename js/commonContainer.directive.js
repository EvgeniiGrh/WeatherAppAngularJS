angular.module('weatherApp')
  .directive('commonContainer', function () {
    return {
      restrict: 'AE',
      link: function (scope) {
        scope.weatherList = [];
      },
    };
  });