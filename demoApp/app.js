var app = angular.module('myApp', ['ngEocities']);

app.controller('myController', function($scope, $timeout){
  $scope.active = true;
  console.log('inside mycontroller');
  // (function activate(){
  //   $timeout(function(){
  //   $scope.active = !$scope.active;
  //   activate();
  // }, 3000)})();
});