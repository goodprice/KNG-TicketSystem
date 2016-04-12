"use strict";

angular.module("KNGSoftware.services",['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/services',{
            templateUrl: 'js/services/services.html',
            controller: 'servicesController'
        });
    }])
    .controller('servicesController',['$scope',function($scope){
        $scope.services = {
            "name": "services"
        };
    }]);