'use strict';

app.controller('AdminTownsCtrl',
    function($scope, $rootScope, $routeParams, $location, adminService, notifyService, pageSize) {
        $scope.townsParams = {
            'startPage': 1,
            'pageSize': pageSize
        };

        $scope.reloadTowns = function() {
            adminService.getAllTowns(
                $scope.townsParams,
                function success(data) {
                    $scope.townsData = data;
                },
                function error() {
                    notifyService.showError("Cannot load towns", err);
                })
        }

        $scope.createTown = function() {
            adminService.getAllTowns(
                $scope.townsData,
                function success(data) {
                    $scope.townsData = data;
                    notifyService.showInfo("Town created successful");
                },
                function error() {
                    notifyService.showError("Cannot create town", err);
                })
        }

        $scope.reloadTowns();
    }
);
