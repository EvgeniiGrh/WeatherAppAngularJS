angular.module('weatherApp')
.directive('weatherCard', function () {
  return {
    restrict: 'AE',
    scope: {
      title: '=',
      temp: '=',
      deleteCard: '&'
    },
    templateUrl: '../templates/weatherCard.template.html',
    link: function(scope){
    }, 
  };
});