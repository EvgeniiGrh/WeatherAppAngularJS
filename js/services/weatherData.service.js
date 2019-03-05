angular.module('weatherApp')
  .service('weatherData', function ($http) {

    this.getWeatherFromServer = function (cityTitle) {
      return $http.get(`http://api.apixu.com/v1/current.json?key=6cbe15feda954dcc8cf91121192202&q=${cityTitle}`)
        .then(function (response) {
          return { title: cityTitle, temp: response.data.current.temp_c };
        });
    }
  });
