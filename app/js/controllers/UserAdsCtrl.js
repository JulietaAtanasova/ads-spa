'use strict';

app.controller('UserAdsCtrl',
    function($scope, $location, userService, notifyService) {
        $scope.ads = userService.getUserAds();
    }
);
