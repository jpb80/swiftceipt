'use strict'

###*
 # @ngdoc function
 # @name testAngularApp.controller:MainCtrl
 # @description
 # # MainCtrl
 # Controller of the testAngularApp
###
angular.module('testAngularApp')
  .controller 'MainCtrl', ($scope) ->
    $scope.awesomeThings = [
      'HTML5 Boilerplate'
      'AngularJS'
      'Karma'
    ]
