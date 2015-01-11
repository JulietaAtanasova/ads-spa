'use strict';

app.controller('AdminAdsCtrl',
    function ($scope, $rootScope, $routeParams, $location, userService, notifyService, pageSize) {
        $scope.adsParams = {
            'startPage': 1,
            'pageSize': pageSize
        };

        $scope.adStatusClicked = function(clickedAdStatus) {
            $scope.selectedAdStatus = clickedAdStatus;
            $rootScope.$broadcast("adStatusSelectionChanged", clickedAdStatus);
        };

        $scope.$on("adStatusSelectionChanged", function(event, selectedAdStatus) {
            $scope.adsParams.status = selectedAdStatus;
            $scope.adsParams.startPage = 1;
            $scope.reloadAds();
        });

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
