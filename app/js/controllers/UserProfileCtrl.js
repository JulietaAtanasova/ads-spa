'use strict';

app.controller('UserProfileCtrl',
    function($scope, $rootScope, $routeParams, $location, userService, townsService, notifyService, pageSize) {
        $scope.userData = {
            townId: null
        };
        $scope.towns = townsService.getTowns();

        $scope.getUser = function() {
            userService.getUser(
                function success(data) {
                    $scope.userData = data;
                    console.log($scope.userData);
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
                    $location.path("/");
                },
                function error(err) {
                    notifyService.showError("Edit profile failed", err);
                }
            );
        };

        $scope.getUser();
    }
);
