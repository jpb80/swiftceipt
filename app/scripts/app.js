'use strict';

/* App Module */

angular.module('swiftCeiptApp', [
    'ngRoute',
    'swiftCeiptControllers',
    'swiftCeiptServices'
]).
    config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'views/top-navbar.html',
            controller: 'MainController'
        }).
  /*      when('/login', {
            templateUrl: 'views/swiftceipt.html',
            controller: 'MainController'
        }). */
        otherwise({
          redirectTo: '/'
        });
  }]);


