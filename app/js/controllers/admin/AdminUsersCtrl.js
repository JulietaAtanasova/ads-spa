'use strict';

app.controller('AdminUsersCtrl',
    function ($scope, $rootScope, $routeParams, $location, adminService, notifyService, pageSize) {
        $scope.adsParams = {
            'startPage': 1,
            'pageSize': pageSize
        };

    }
);
