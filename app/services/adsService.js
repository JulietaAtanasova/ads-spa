'use strict';

app.factory('adsService',
    function($resource, baseServiceUrl) {
        var adsResource = $resource(
            baseServiceUrl + '/ads',
            null, {
                'getAll': {
                    method: 'GET'
                }
            }
        );

        return {
            getAds: function(params, success, error) {
                return adsResource.getAll(params, success, error);
            }
        }
    }
);

app.factory('townsService',
    function($resource, baseServiceUrl) {
        var townsResource = $resource(
            baseServiceUrl + '/towns'
        );

        return {
            getTowns: function(success, error) {
                return townsResource.query(success, error);
            }
        };
    }
);

app.factory('categoriesService',
    function($resource, baseServiceUrl) {
        var categoriesResource = $resource(
            baseServiceUrl + '/categories'
        );

        return {
            getCategories: function(success, error) {
                return categoriesResource.query(success, error);
            }
        }
    }
);
