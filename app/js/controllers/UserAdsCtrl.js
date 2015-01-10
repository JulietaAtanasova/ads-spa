'use strict';

app.controller('UserAdsCtrl',
    function($scope, $location, userService, notifyService, pageSize) {
        $scope.adsParams = {
            'startPage': 1,
            'pageSize': pageSize
        };
        $scope.adStatusClicked = function(clickedAdStatus) {
            $scope.selectedAdStatus = clickedAdStatus;
        };

        $scope.reloadAds = function() {
            userService.getUserAds(
                $scope.adsParams,
                function success(data) {
                    $scope.ads = data;
                },
                function error(err) {
                    notifyService.showError("Cannot load ads", err);
                }
            );
        };

        $scope.reloadAds();
    }
);
