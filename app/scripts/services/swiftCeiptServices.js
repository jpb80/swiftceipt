'use strict';

var swiftCeiptServices = angular.module('swiftCeiptServices', ['ngResource']);

/* swiftCeiptServices.factory("Main", function($resource) {
    return {
        greeting: $resource('http://localhost:8080/greeting', {}, {
            query: { method: 'GET', params: {}, isArray:false }
        })
    };
});
*/


swiftCeiptServices.service('Test', ['$resource',  function Test($resource) {
    return $resource( 'http://localhost:8080/registerUser', {}, { method : 'POST',
        headers: {'Accept' : 'application/json, text/plain', 'Content-Type' : 'application/json'}, isArray:false});
}]);
