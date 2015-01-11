'use strict';

app.controller('AppCtrl',
    function ($scope, $location, authService, notifyService) {
        $scope.authService = authService;
        $scope.screenTitle = '';

        $scope.setScreenTitle = function(title) {
            $scope.screenTitle = title;
        };

        $scope.getScreenTitle = function() {
            return $scope.screenTitle;
        };

        $scope.logout = function() {
            authService.logout();
            notifyService.showInfo("Logout successful");
            $location.path("/");
        };
    }
);
