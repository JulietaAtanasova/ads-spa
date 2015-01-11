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
                    notifyService.showError("Cannot load towns");
                })
        }

        $scope.createTown = function(newTown) {
            adminService.getAllTowns(
                newTown,
                function success(data) {
                    $scope.townsData = data;
                    notifyService.showInfo("Town created successful");
                    $location.path("/admin/towns");
                },
                function error() {
                    notifyService.showError("Cannot create town");
                })
        }

        $scope.reloadTowns();
    }
);
