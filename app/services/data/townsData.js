app.factory('townssData', ['$resource', 'baseServiceUrl', function($resource, baseServiceUrl) {
    function getTowns() {
        return $resource(baseServiceUrl + 'towns').query();
    }

    return {
        getTowns: getTowns
    };
}]);
