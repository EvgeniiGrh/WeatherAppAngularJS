angular.module('weatherApp')
.directive('customSelector', function (cityDataService) {
  return {
    restrict: 'AE',
    scope: {
    },
    templateUrl: '../templates/customSelector.template.html',
    link: function(scope){
      scope.citiesArray = cityDataService.getCities();

      scope.addInfo = cityDataService.addWeatherForCity;
    }, 
  };
});