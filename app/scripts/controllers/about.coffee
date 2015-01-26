'use strict'

###*
 # @ngdoc function
 # @name testAngularApp.controller:AboutCtrl
 # @description
 # # AboutCtrl
 # Controller of the testAngularApp
###
angular.module('testAngularApp')
  .controller 'AboutCtrl', ($scope) ->
    $scope.awesomeThings = [
      'HTML5 Boilerplate'
      'AngularJS'
      'Karma'
    ]
