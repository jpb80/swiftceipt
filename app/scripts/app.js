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
            templateUrl: 'app/views/landing-page-content.html',
            controller: 'MainController'
        }).
        when('/signup', {
            templateUrl: 'app/views/signup.html',
            controller: 'MainController'
        }).
        otherwise({
          templateUrl: 'app/views/404.html'
        });
  }]);


