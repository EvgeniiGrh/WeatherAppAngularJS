angular.module('weatherApp')
.directive('weatherCards', function (cityDataService) {
  return {
    restrict: 'AE',
    scope: {
    },
    templateUrl: '../templates/weatherCards.template.html',
    link: function(scope){

      scope.weatherList = cityDataService.getWeatherList(); 

      // debugger
      // scope.$watch('weatherList', function(newValue, oldValue) {
      //   debugger
      //   if (newValue.length !== oldValue.length) {
      //     scope.weatherList = newValue;
      //   }
      // });

      scope.delete = function(title){
        debugger
        // scope.$apply(function(title){
        debugger
          cityDataService.deleteWeatherInfo(title);
          // scope.weatherList = cityDataService.getWeatherList(); 
        // });
      };
    }, 
  };
});