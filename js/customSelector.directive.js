angular.module('weatherApp')
.directive('customSelector', function () {
  return {
    restrict: 'AE',
    scope: {
      citiesArray: '=array',
      changeSelectedValue: '&',
    },
    templateUrl: '../templates/customSelector.template.html',
    link: function(scope){
      scope.changeOption = function (selectedItem){
        scope.changeSelectedValue({newValue: selectedItem});
      }
    }, 
  };
});