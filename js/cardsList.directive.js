angular.module('weatherApp')
  .directive('cardsList', function ($rootScope) {
    return {
      restrict: 'AE',
      scope: {
      },
      templateUrl: '../templates/cardsList.template.html',
      link: function (scope) {
        scope.$on('updateWeatherList', function(event, data){
          scope.weatherList = data;
        });

        var rootScopeListener = $rootScope.$on('updateWeatherListUsingRootScope', function(event, data){
          scope.weatherList = data;
        });

        $scope.$on('$destroy', rootScopeListener);

        scope.delete = function (cityTitle) {
          $rootScope.$broadcast('deleteComponent', cityTitle);
        };
      },
    };
  });