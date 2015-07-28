'use strict';

app.controller('AdminEditTownCtrl',
    function($scope, $rootScope, $routeParams, $location, townsService, categoriesService,
        adminService, notifyService) {
        $scope.townData = {
            name: null
        };
        $scope.categories = categoriesService.getCategories();
        $scope.towns = townsService.getTowns();

        $scope.getTownToEdit = function(id) {
            adminService.getTownToEdit(
                id,
                function success(data) {
                    $scope.townData = data;
                },
                function error() {
                    notifyService.showError("Load town failed.", err);
                })
        };

        $scope.editTown = function(newTownData) {
            adminService.editTown(
                $routeParams.id,
                newTownData,
                function success() {
                    notifyService.showInfo("Town edited successful.");
                    $location.path("/admin/towns/list");
                },
                function error(err) {
                    notifyService.showError("Edit town failed", err);
                }
            );
        };

        $scope.getTownToEdit($routeParams.id);
    }
);
