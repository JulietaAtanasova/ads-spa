'use strict';

app.controller('AdminTownsCtrl',
    function($scope, $rootScope, $routeParams, $location, adminService, notifyService, pageSize) {
        $scope.townsParams = {
            'startPage': 1,
            'pageSize': pageSize
        };
        $scope.newTown = {
            name: null
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
            adminService.createTown(
                $scope.newTown,
                function success(data) {
                    $scope.townsData = data;
                    notifyService.showInfo("Town created successful");
                    $location.path("/admin/towns");
                },
                function error() {
                    notifyService.showError("Cannot create town");
                })
        }

        $scope.deleteTown = function() {
            adminService.deleteTown(
                $routeParams.id,
                function success() {
                    notifyService.showInfo("Town deleted successful.");
                    $location.path("/admin/towns");
                },
                function error() {
                    notifyService.showError("Cannot delete town");
                })
        }

        $scope.reloadTowns();
    }
);
