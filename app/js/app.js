'use strict';

var app = angular.module('app', [
        'ngRoute',
        'ngResource',
        'ui.bootstrap.pagination'
    ]).constant('baseServiceUrl', 'http://softuni-ads.azurewebsites.net/')
    .constant('pageSize', 2)
    .run(function($rootScope, $location, authService) {
        $rootScope.$on('$locationChangeStart', function(event) {
            if ($location.path().indexOf("/user/") != -1 && !authService.isLoggedIn()) {
                // Authorization check: anonymous site visitors cannot access user routes
                $location.path("/");
            }
        });
    }).config(function($routeProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'templates/home.html',
                controller: 'HomeCtrl'
            }).when('/login', {
                templateUrl: 'templates/login.html',
                controller: 'LoginCtrl'
            }).when('/register', {
                templateUrl: 'templates/register.html',
                controller: 'RegisterCtrl'
            }).when('/user/ads/publish', {
                templateUrl: 'templates/user/publish-new-ad.html',
                controller: 'UserPublishNewAdCtrl'
            }).when('/user/ads', {
                templateUrl: 'templates/home.html',
                controller: 'UserAdsCtrl'
            }).otherwise({
                redirectTo: '/'
            });

    });
