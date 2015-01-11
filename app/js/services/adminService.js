'use strict';

app.factory('adminService',
    function ($http, baseServiceUrl, authService) {
        return {
            getAllAds: function (params, success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/admin/ads',
                    headers: authService.getAuthHeaders(),
                    params: params
                };
                $http(request).success(success).error(error);
            },

            getAllUsers: function (id, success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/admin/users',
                    headers: authService.getAuthHeaders(),
                    params: params
                };
                $http(request).success(success).error(error);
            },

            getAllCategories: function (params, success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/admin/categories',
                    headers: authService.getAuthHeaders(),
                    params: params
                };
                $http(request).success(success).error(error);
            },

            createTown: function (categoryData, success, error) {
                var request = {
                    method: 'POST',
                    url: baseServiceUrl + '/api/admin/categories',
                    headers: authService.getAuthHeaders(),
                    data: categoryData
                };
                $http(request).success(success).error(error);
            },

            getAllTowns: function (params, success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/admin/towns',
                    headers: authService.getAuthHeaders(),
                    params: params
                };
                $http(request).success(success).error(error);
            },

            createTown: function (townData, success, error) {
                var request = {
                    method: 'POST',
                    url: baseServiceUrl + '/api/admin/towns',
                    headers: authService.getAuthHeaders(),
                    data: townData
                };
                $http(request).success(success).error(error);
            }
        }
    }
);
