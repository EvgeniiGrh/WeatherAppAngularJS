angular.module('weatherApp')
.directive('weatherCards', function (cityDataService) {
  return {
    restrict: 'AE',
    scope: {
    },
    templateUrl: '../templates/weatherCards.template.html',
    link: function(scope){

      scope.weatherList = cityDataService.getWeatherList(); 

      // scope.$watch('weatherList', function(newValue, oldValue) {
      //   console.log('newValue', newValue);
      //   console.log('oldValue', oldValue);
      // });

      scope.delete = function(title){
        debugger
        // scope.$apply(function(title){
        debugger
          cityDataService.deleteWeatherInfo(title);
          scope.weatherList = cityDataService.getWeatherList(); 
        // });
      };
    }, 
  };
});