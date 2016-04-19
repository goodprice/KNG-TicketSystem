'use strict';

angular.module('KNGSoftware', [
    'ngRoute',
    'KNGSoftware.home',
    'KNGSoftware.aboutUs',
    'KNGSoftware.services',
    'KNGSoftware.projects',
    'KNGSoftware.login',
    'KNGSoftware.register',
    'KNGSoftware.logout',
    'KNGSoftware.dashboard',
    'KNGSoftware.notifyService',
    //'KNGSoftware.ticketSystem',
    'KNGSoftware.contact'
])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/home'});
    }])
    .constant('BASE_URL', 'http://softuni-issue-tracker.azurewebsites.net/api/');

