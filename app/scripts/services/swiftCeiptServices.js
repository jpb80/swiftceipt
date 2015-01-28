'use strict';

var swiftCeiptServices = angular.module('swiftCeiptServices', ['ngResource']);

swiftCeiptServices.factory("Main", function($resource) {
    return {
        greeting: $resource('http://localhost:8080/greeting', {}, {
            query: { method: 'GET', params: {}, isArray:false }
        })
    };
});

swiftCeiptServices.factory("Main", function($resource) {
    return {
        greeting: $resource('http://localhost:8080/greeting', {}, {
            query: { method: 'POST', params: {name : 'test'}, isArray:false }
        })
    };
});
