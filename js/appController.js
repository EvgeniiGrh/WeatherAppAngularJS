angular.module('weatherApp')
.service('cityDataService', function($http){
  var cities = ['Paris', 'Minsk', 'London', 'New York'];
  var weatherList = [];

  this.getCities = function(){
    return cities;
  } 

  this.addWeatherForCity = function(cityTitle) {
    $http.get(`http://api.apixu.com/v1/current.json?key=6cbe15feda954dcc8cf91121192202&q=${cityTitle}`)
          .then(function(response){
            weatherList.push({title: cityTitle, temp: response.data.current.temp_c});
          });
  }

  this.getWeatherList = function() {
    return weatherList;
  }

  this.deleteWeatherInfo = function(cityTitle) {
    debugger
    weatherList = weatherList.filter(item => item.title !== cityTitle);
  }

});
