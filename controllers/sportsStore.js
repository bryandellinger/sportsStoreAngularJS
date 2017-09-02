angular.module("sportsStore")
    .constant("dataUrl", "http://localhost:2403/products")
.controller("sportsStoreCtrl", function ($scope, $http, dataUrl) {
 
    $scope.data = {};
    $http({
        method: 'GET',
        url: dataUrl
    }).then(function (success) {
          $scope.data.products = success.data
    },function (error){
         $scope.data.error = error;
     });
     
})