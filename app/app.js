'use strict';

var app = angular.module('adsApp', [
        'ngRoute',
        'ngResource',
        'ui.bootstrap.pagination'
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
                controller: 'UserPublishNewAdCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }])
    .constant('baseServiceUrl', 'http://softuni-ads.azurewebsites.net/api/')
    .constant('pageSize', 2)
    .run(function($rootScope, $location, authService) {
        $rootScope.$on('$locationChangeStart', function(event) {
            if ($location.path().indexOf("/user/") != -1 && !authService.isLoggedIn()) {
                // Authorization check: anonymous site visitors cannot access user routes
                $location.path("/");
            }
        });
    });
