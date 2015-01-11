'use strict';

app.controller('AdminTownsCtrl',
    function($scope, $rootScope, $routeParams, $location, adminService, notifyService, pageSize) {
        $scope.townsData = {
            'startPage': 1,
            'pageSize': pageSize
        };

        $scope.getAllTowns = function() {
            adminService.getAllTowns(
                function success(data) {
                	$scope.townsData = data;
                	console.log('yes');
                },
                function error() {
                	notifyService.showError("Cannot load towns", err);
                })
        }

        $scope.getAllTowns();
    }
);
