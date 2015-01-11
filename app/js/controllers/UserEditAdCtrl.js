'use strict';

app.controller('UserEditAdCtrl',
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

        $scope.editAd = function(newAdData) {
            if ($scope.adData.changeimage == true) {
                newAdData.changeimage = true;
                newAdData.imageDataUrl = $scope.adData.imageDataUrl;
            }

            userService.editAd(
                $routeParams.id,
                newAdData,
                function success() {
                    notifyService.showInfo("Advertisement edited successful.");
                    $location.path("/user/ads");
                },
                function error(err) {
                    notifyService.showError("Edit ad failed", err);
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

        $scope.editAdImage = function() {
            $scope.adData.changeimage = true;
            notifyService.showInfo('The image will be edited.');
        };

        $scope.deleteAdImage = function() {
            $scope.adData.changeimage = true;
            $scope.adData.imageDataUrl = '';
            notifyService.showInfo('The image will be deleted.');
        };
    }
);
