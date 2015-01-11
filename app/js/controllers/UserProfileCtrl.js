'use strict';

app.controller('UserProfileCtrl',
    function($scope, $rootScope, $routeParams, $location, userService, townsService, notifyService, pageSize) {
        $scope.userData = {
            townId: null
        };
        $scope.towns = townsService.getTowns();
        $scope.passwordData = {};

        $scope.getUser = function() {
            userService.getUser(
                function success(data) {
                    $scope.userData = data;
                },
                function error(err) {
                    notifyService.showError("Can not find user", err);
                }
            );
        };

        $scope.editProfile = function(userData) {
            userService.editProfile(
                userData,
                function success() {
                    notifyService.showInfo("Profile edited successful.");
                },
                function error(err) {
                    notifyService.showError("Edit profile failed", err);
                }
            );
        };

        $scope.changePassword = function(passwordData) {
            userService.changePassword(
                passwordData, 
                function success(data) {
                    notifyService.showInfo("Password edited successful.");
                },
                function error(err) {
                    notifyService.showError("Change password failed.", err);
                }
            );
        };

        $scope.getUser();
    }
);
