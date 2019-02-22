angular.module('weatherApp')
.controller('appController', ['$scope', '$http', function($scope, $http){
  $scope.cities = ['Paris', 'Minsk', 'London', 'New York'];

  $scope.selectedItem = '';

  $scope.weatherList = [];

  $scope.changeSelectedValue = function(newValue){
    $scope.selectedItem = newValue;
  }

  $scope.addInfo = function(){
    $http.get(`http://api.apixu.com/v1/current.json?key=6cbe15feda954dcc8cf91121192202&q=${$scope.selectedItem}`)
      .then(function(response){
        $scope.weatherList.push({title: response.data.location.name, temp: response.data.current.temp_c});
      });
  }

  $scope.delete = function(title){
    $scope.weatherList = $scope.weatherList.filter(item => item.title !== title)
  }
}]);
