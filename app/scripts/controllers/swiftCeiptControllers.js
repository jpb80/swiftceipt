'use strict';

var swiftCeiptControllers = angular.module('swiftCeiptControllers', []);

swiftCeiptControllers.controller('LoginCtrl', ['$http', function($http) {

    var self = this;
    self.user = new Object();

    self.submit = function() {
        $http.post('http://localhost:8080/registerUser', self.user);
        /*$http.post('app/json/users.json', self.user);*/


    };

    }]);





swiftCeiptControllers.controller('MainController', function($scope, Test){

   /* $scope.newTest = new Test();
    $scope.newTest.firstnName = "jordan";
    $scope.newTest.lastName = 'butt';
    $scope.newTest.email = 'fuckthis@gmail.com';
    $scope.newTest.password = 'fuckthis';
    JSON.stringify($scope.newTest);
    console.log($scope.newTest);
    $scope.newTest.$save();*/

});
