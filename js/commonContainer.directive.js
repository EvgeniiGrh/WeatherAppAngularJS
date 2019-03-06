angular.module('weatherApp')
  .directive('commonContainer', function ($rootScope) {
    var weatherList = [];
    return {
      restrict: 'AE',
      link: function (scope) {
        scope.weatherList = weatherList;

        scope.$on('getWeather', function(event, data){
          scope.weatherList.push(data);
          scope.$broadcast('updateWeatherList', scope.weatherList);
        });

        scope.$on('deleteComponent', function(event, cityTitle){
          scope.weatherList = scope.weatherList.filter(item => item.title !== cityTitle);
          debugger
          $rootScope.$emit('updateWeatherListUsingRootScope', scope.weatherList);
        });
      },
    };
  });