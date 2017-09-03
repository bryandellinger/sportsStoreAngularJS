angular.module("sportsStore")
    .constant("dataUrl", "http://localhost:2403/products")
    .constant("orderUrl", "http://localhost:2403/orders")
.controller("sportsStoreCtrl", function ($scope, $http, $location,  dataUrl, orderUrl, cart) {
 
    $scope.data = {};
    $http({
        method: 'GET',
        url: dataUrl
    }).then(function (success) {
          $scope.data.products = success.data
    },function (error){
         $scope.data.error = error;
     });

     $scope.sendOrder = function(shippingDetails){
         var order = angular.copy(shippingDetails);
         order.products = cart.getProducts();
        $http({
            method: 'POST',
            url: orderUrl,
            data: order
            }).then(function successCallback(dataUrl) {
                    $scope.data.orderId = data.id;
                     cart.getProducts().length = 0;
                    $location.path("/complete")
            }, function errorCallback(error) {
                        $scope.data.orderError = error;
                        $location.path("/complete")
                });
      }
     
})