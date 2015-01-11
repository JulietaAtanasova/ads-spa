'use strict';

app.controller('UserDeleteAdCtrl',
    function($scope, $rootScope, $routeParams, $location, townsService, categoriesService,
        userService, notifyService) {
        $scope.adData = {
            townId: null,
            categoryId: null
        };
        $scope.categories = categoriesService.getCategories();
        $scope.towns = townsService.getTowns();

        $scope.getAdToEdit = function(id) {
            userService.getAdToEdit(
                id,
                function success(data) {
                    $scope.adData = data;
                },
                function error() {
                    notifyService.showError("Load ad failed.", err);
                })
        }

        $scope.deleteAd = function() {
            userService.deleteAd(
                $routeParams.id,
                function success() {
                    notifyService.showInfo("Advertisement deleted successful.");
                    $location.path("/user/ads");
                },
                function error(err) {
                    notifyService.showError("Delete ad failed", err);
                }
            );
        }

        $scope.getAdToEdit($routeParams.id);

        $scope.fileSelected = function(fileInputField) {
            delete $scope.adData.imageDataUrl;
            var file = fileInputField.files[0];
            if (file.type.match(/image\/.*/)) {
                var reader = new FileReader();
                reader.onload = function() {
                    $scope.adData.imageDataUrl = reader.result;
                    $(".image-box").html("<img src='" + reader.result + "'>");
                };
                reader.readAsDataURL(file);
            } else {
                $(".image-box").html("<p>File type not supported!</p>");
            }
        };

    }
);
