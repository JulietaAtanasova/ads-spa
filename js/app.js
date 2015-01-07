'use strict';

angular.module('adsApp', [
    'ngRoute',
    'adsApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
    });
    $routeProvider.when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
    });
    $routeProvider.when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl'
    });
    $routeProvider.when('/publish', {
        templateUrl: 'views/partials/add-ad-page.html',
        controller: 'AddAdCtrl'
    });
    $routeProvider.otherwise({
        redirectTo: '/'
    });
}]);
