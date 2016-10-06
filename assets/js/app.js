'use strict';

var catalogueApp = angular.module('catalogueApp', ['ngRoute']);
catalogueApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'templates/catalogue.html',
      controller: 'CatalogueController'
    }).otherwise({
      redirectTo: '/',
      caseInsensitiveMatch: true
    })
  }]);

catalogueApp.controller('CatalogueController', ['$scope', '$rootScope', 'CatalogueService', function($scope, $rootScope, CatalogueService) {
  $scope.formData = {};
  $scope.cards = [];

  $scope.addCards = function() {
    CatalogueService.addCards($scope.formData).then(function(response) {
      $scope.cards.push($scope.formData)
      $scope.formData = {};
    });
  }

  CatalogueService.getCards().then(function(response) {
    $scope.cards = response;
  });

  $scope.update = function(data) {
    console.log("Blur fires");
    console.log("data to update: ", data);
  }

  $scope.removeCards = function(card) {
      CatalogueService.removeCards(card).then(function(response) {
        $scope.cards.splice($scope.cards.indexOf(card), 1);
    });
  }


}]);
