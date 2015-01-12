'use strict';

app.controller('AdminAdsCtrl',
    function ($scope, $rootScope, $routeParams, $location, adminService, notifyService, pageSize) {
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
            $scope.getAllAds();
        });

        $scope.getAllAds = function() {
            adminService.getAllAds(
                $scope.adsParams,
                function success(data) {
                    $scope.ads = data;
                },
                function error(err) {
                    notifyService.showError("Cannot load ads");
                }
            );
        };

        $scope.approveAd = function(id) {
            var adId = parseInt(id);
            adminService.approveAd(
                adId, 
                function success() {
                    console.log('yes');
                    notifyService.showError("Approve ad success");
                }, 
                function error() {
                    notifyService.showError("Approve ad failed");
                }
            );
        };

        $scope.getAllAds();

    }
);
