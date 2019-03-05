angular.module('weatherApp')
  .directive('cardsList', function () {
    return {
      restrict: 'AE',
      scope: {
        weatherList: '=',
      },
      templateUrl: '../templates/cardsList.template.html',
      link: function (scope) {
        scope.delete = function (cityTitle) {
          scope.weatherList = scope.weatherList.filter(item => item.title !== cityTitle);
        };
      },
    };
  });