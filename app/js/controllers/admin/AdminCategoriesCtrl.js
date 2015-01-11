'use strict';

app.controller('AdminCategoriesCtrl',
    function($scope, $rootScope, $routeParams, $location, adminService, notifyService, pageSize) {
        $scope.categoriesParams = {
            'startPage': 1,
            'pageSize': pageSize
        };

        $scope.newCategory = {
            name: null
        };

        $scope.reloadCategories = function() {
            adminService.getAllCategories(
                $scope.categoriesParams,
                function success(data) {
                    $scope.categoriesData = data;
                },
                function error() {
                    notifyService.showError("Cannot load categories");
                })
        }

        $scope.createCategory = function(newCategory) {
            adminService.createCategory(
                $scope.newCategory,
                function success(data) {
                    $scope.categoriesData = data;
                    notifyService.showInfo("Category created successful");
                    $location.path("/admin/categories/list");
                },
                function error() {
                    notifyService.showError("Cannot create category");
                })
        }

        $scope.deleteCategory = function() {
            adminService.deleteCategory(
                $routeParams.id,
                function success() {
                    notifyService.showInfo("Category deleted successful.");
                    $location.path("/admin/categories/list");
                },
                function error() {
                    notifyService.showError("Cannot delete category");
                })
        }

        $scope.reloadCategories();
    }
);
