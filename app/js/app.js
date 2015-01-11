'use strict';

var app = angular.module('app', [
        'ngRoute',
        'ngResource',
        'ui.bootstrap.pagination'
    ]).constant('baseServiceUrl', 'http://softuni-ads.azurewebsites.net/')
    .constant('pageSize', 2)
    .run(function($rootScope, $routeParams, $location, authService) {
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
                templateUrl: 'templates/user/user-ads.html',
                controller: 'UserAdsCtrl'
            }).when('/user/ads/edit/:id', {
                templateUrl: 'templates/user/edit-ad.html',
                controller: 'UserEditAdCtrl'
            }).when('/user/ads/delete/:id', {
                templateUrl: 'templates/user/delete-ad.html',
                controller: 'UserDeleteAdCtrl'
            }).when('/user/profile', {
                templateUrl: 'templates/user/edit-profile.html',
                controller: 'UserProfileCtrl'
            }).when('/admin/home', {
                templateUrl: 'templates/admin/admin-ads.html',
                controller: 'AdminAdCtrl'
            }).when('/admin/users/list', {
                templateUrl: 'templates/admin/users-list.html',
                controller: 'AdminAdCtrl'
            }).when('/admin/categories/list', {
                templateUrl: 'templates/admin/categories-list.html',
                controller: 'AdminAdCtrl'
            }).when('/admin/towns/list', {
                templateUrl: 'templates/admin/towns-list.html',
                controller: 'AdminAdCtrl'
            }).otherwise({
                redirectTo: '/'
            });

    });
