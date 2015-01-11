'use strict';

app.controller('LoginCtrl',
    function ($scope, $rootScope, $location, authService, notifyService) {

        $scope.login = function(userData) {
            authService.login(userData,
                function success() {
                    notifyService.showInfo("Login successful");
                    if(authService.isAdmin()) {
                        $location.path("/admin/home");
                    } else {
                        $location.path("/");
                    } 
                    
                },
                function error(err) {
                    notifyService.showError("Login failed: The user name or password is incorrect", err);
                }
            );
        };
    }
);
