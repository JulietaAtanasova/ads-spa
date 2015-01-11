'use strict';

app.controller('LeftSidebarCtrl',
    function($scope, $rootScope, userService, adsService, townsService) {
        $scope.submenuClicked = function(clickedSubMenu) {
            $scope.selectedSubMenu = clickedSubMenu;
            $rootScope.$broadcast("subMenuSelectionChanged", clickedSubMenu);
        };

        $scope.$on("subMenuSelectionChanged", function(event, selectedSubMenu) {
            //TO DO
        });
    }
);
