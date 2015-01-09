'use strict';

angular.module('adsApp', [
        'ngRoute'
    ]).config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/home.html',
                controller: 'HomeCtrl'
            })
            .when('/login', {
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl'
            })
            .when('/register', {
                templateUrl: 'views/register.html',
                controller: 'RegisterCtrl'
            })
            .when('/publish', {
                templateUrl: 'views/partials/add-ad-page.html',
                controller: 'AddAdCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }])
    .constant('baseServiceUrl', 'http://softuni-ads.azurewebsites.net/api/');
