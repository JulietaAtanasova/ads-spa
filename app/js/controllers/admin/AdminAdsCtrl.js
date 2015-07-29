'use strict';

app.controller('AdminAdsCtrl',
    function ($scope, $rootScope, $routeParams, $location, townsService, categoriesService, adminService, notifyService, pageSize) {
        $scope.adsParams = {
            'startPage': 1,
            'pageSize': pageSize
        };

        $scope.categories = categoriesService.getCategories();
        $scope.towns = townsService.getTowns();

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

        $scope.getAdById = function(id){
            adminService.getAdById(
                id,
                function success(data){
                    $scope.adData = data;
                },
                function error(){
                })
        }

        $scope.approveAd = function(id) {
            var adId = parseInt(id);
            adminService.approveAd(
                adId, 
                function success() {
                    $scope.getAllAds();
                    notifyService.showInfo("Approve ad success");
                }, 
                function error() {
                    notifyService.showError("Approve ad failed");
                }
            );
        };

        $scope.rejectAd = function(id) {
            var adId = parseInt(id);
            adminService.rejectAd(
                adId, 
                function success() {
                    $scope.getAllAds();
                    notifyService.showInfo("Reject ad success");
                }, 
                function error() {
                    notifyService.showError("Approve ad failed");
                }
            );
        };

        $scope.editAd = function(adData) {
            adminService.editAd(
                $routeParams.id,
                adData,
                function success() {
                    notifyService.showInfo("Ad edited successful");
                    $location.path("/admin/home");
                },
                function error() {
                    notifyService.showError("Ad edit failed");
                })
        }

        $scope.deleteAd = function() {
            adminService.deleteAd(
                $routeParams.id, 
                function success() {
                    notifyService.showInfo("Delete ad success");
                }, 
                function error() {
                    notifyService.showError("Delete ad failed");
                }
            );
        }

        $scope.getAllAds();
        $scope.getAdById($routeParams.id);

    }
);
