app.factory('adsData', ['$resource', 'baseServiceUrl', function($resource, baseServiceUrl) {
    function getAllAds() {
        return $resource(baseServiceUrl + 'ads').query();
    }

    return {
        getAllAds: getAllAds
    };
}]);
