'use strict';

app.controller('AdminUsersCtrl',
    function($scope, $rootScope, $routeParams, $location, adminService, notifyService, pageSize) {
        $scope.usersParams = {
            'startPage': 1,
            'pageSize': pageSize
        };
        $scope.newUser = {
        	name: null
        };

        $scope.reloadUsers = function() {
            adminService.getAllUsers(
                $scope.usersParams,
                function success(data) {
                    $scope.usersData = data;
                },
                function error() {
                    notifyService.showError("Cannot load users");
                })
        }

        $scope.createUser = function(newUser) {
            adminService.createUser(
                $scope.newUser,
                function success(data) {
                    $scope.userData = data;
                    notifyService.showInfo("User created successful");
                    $location.path("/admin/users");
                },
                function error() {
                    notifyService.showError("Cannot create user");
                })
        }

        $scope.reloadUsers();
    }
);
