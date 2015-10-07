
var shopTrackerApp=angular.module('shopTrackerApp', []);

shopTrackerApp.controller('ShopLog', ['$scope', '$http', function($scope, $http){
  $http.get('members/members.json').success(function(data){
  $scope.logs= data;
});
}]);