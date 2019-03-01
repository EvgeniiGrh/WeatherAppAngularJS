angular.module('weatherApp')
.directive('weatherCards', function (cityDataService) {
  return {
    restrict: 'AE',
    scope: {
    },
    templateUrl: '../templates/weatherCards.template.html',
    link: function(scope){

      scope.weatherList = cityDataService.getWeatherList(); 


      // scope.$watch('weatherList.length', function(newValue, oldValue) {
      //   console.log('newValue', newValue);
      //   console.log('oldValue', oldValue);
      // });

      scope.delete = function(title){
        scope.$apply(function(title){
          cityDataService.deleteWeatherInfo(title);
        });
      };
    }, 
  };
});