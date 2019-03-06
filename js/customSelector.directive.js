angular.module('weatherApp')
  .directive('customSelector', function (weatherData, CITIES) {
    return {
      restrict: 'AE',
      templateUrl: '../templates/customSelector.template.html',
      scope: {},
      link: function (scope) {
        scope.citiesArray = CITIES;

        scope.addInfo = function (title) {
          var promiseResponse = weatherData.getWeatherFromServer(title);

          promiseResponse.then((data) => {
            scope.$emit('getWeather', data);
          })
        };
      },
    };
  });