'use strict';

angular.module('adsApp', [
    'ngRoute',
    'adsApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/login', {
        templateUrl: 'partials/login-page.html',
        controller: 'LoginCtrl'
    });
    $routeProvider.when('/register', {
        templateUrl: 'partials/register-page.html',
        controller: 'RegisterCtrl'
    });
    $routeProvider.when('/publish', {
        templateUrl: 'partials/add-ad-page.html',
        controller: 'AddAdCtrl'
    });
    $routeProvider.otherwise({
        redirectTo: '/login'
    });
}]);
