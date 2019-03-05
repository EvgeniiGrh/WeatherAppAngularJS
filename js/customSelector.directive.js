angular.module('weatherApp')
  .directive('customSelector', function (weatherData, CITIES) {
    return {
      restrict: 'AE',
      scope: {
        weatherList: '=',
      },
      templateUrl: '../templates/customSelector.template.html',
      link: function (scope) {
        scope.citiesArray = CITIES;

        scope.addInfo = function (title) {
          var promiseResponse = weatherData.getWeatherFromServer(title);

          promiseResponse.then((data) => {
            scope.weatherList.push(data);
          })
        };
      },
    };
  });