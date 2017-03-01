var app = angular.module('stApp', []);
app.controller('imagesCtrl', function($scope, $http) {
  $http.get("").then(function (response) {
      $scope.myData = response.data.records;
  });
});
