'use strict';

var swiftCeiptControllers = angular.module('swiftCeiptControllers', []);

swiftCeiptControllers.controller('MainController', ['$scope', 'Main',
    function($scope, Main) {
        $scope.greeting = Main.greeting.query();
    }]);


swiftCeiptControllers.controller('LoginCtrl', ['$scope', 'Main',
    function($scope, Main) {
        $scope.user = {
            name : "John Smith",
            email : "smith.john@gmail.com",
            password : "password"
        };
        $scope.showJson = function() {
            $scope.json = angular.toJson($scope.user);
        }
    }]);

swiftCeiptControllers.controller('TestServiceCtrl', ['$scope', 'Main',
    function($scope, Main) {
        $scope.user = {
            name : "John Smith"
        };
        $scope.json = angular.toJson($scope.user);
        /* $scope.showJson = function() {
         $scope.json = angular.toJson($scope.user);
         } */
    }]);



