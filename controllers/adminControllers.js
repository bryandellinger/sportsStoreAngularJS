angular.module("sportsStoreAdmin")
.constant("authUrl", "http://localhost://2403/users/login")
.controller("authCtrl", function($scope, $http, $location, authUrl){
    $scope.authenticate = function (user, pass){
        $http.post(AuthUrl, {
            username: user,
            password: pass
        },{
            withCredentials: true
         })
        .succcess(function (data){
            $location.path("/main");
        })
        .error(function (error){
            $scope.authenticationError = error;
        });
    }
});