'use strict';

app.factory('adminService',
    function($http, baseServiceUrl, authService) {
        return {
            getAllAds: function(params, success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/admin/ads',
                    headers: authService.getAuthHeaders(),
                    params: params
                };
                $http(request).success(success).error(error);
            },

            getAdById: function(id, success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/admin/ads/' + id,
                    headers: authService.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },

            approveAd: function(id, success, error) {
                var request = {
                    method: 'PUT',
                    url: baseServiceUrl + '/api/admin/ads/approve/' + id,
                    headers: authService.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },

            rejectAd: function(id, success, error) {
                var request = {
                    method: 'PUT',
                    url: baseServiceUrl + '/api/admin/ads/reject/' + id,
                    headers: authService.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },

            deleteAd: function(id, success, error) {
                var request = {
                    method: 'DELETE',
                    url: baseServiceUrl + '/api/admin/ads/' + id,
                    headers: authService.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },

            getAllUsers: function(params, success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/admin/users',
                    headers: authService.getAuthHeaders(),
                    params: params
                };
                $http(request).success(success).error(error);
            },

            getUserById: function(id, success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/admin/users/' + id,
                    headers: authService.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },

            deleteUser: function(id, success, error) {
                var request = {
                    method: 'DELETE',
                    url: baseServiceUrl + '/api/admin/user/' + id,
                    headers: authService.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },

            getAllCategories: function(params, success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/admin/categories',
                    headers: authService.getAuthHeaders(),
                    params: params
                };
                $http(request).success(success).error(error);
            },

            getCategoryById: function(id, success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/categories/' + id
                };
                $http(request).success(success).error(error);
            },

            createCategory: function(categoryData, success, error) {
                var request = {
                    method: 'POST',
                    url: baseServiceUrl + '/api/admin/categories',
                    headers: authService.getAuthHeaders(),
                    data: categoryData
                };
                $http(request).success(success).error(error);
            },

            editCategory: function(id, categoryData, success, error) {
                var request = {
                    method: 'PUT',
                    url: baseServiceUrl + '/api/admin/categories/' + id,
                    headers: authService.getAuthHeaders(),
                    data: categoryData
                };
                $http(request).success(success).error(error);
            },

            deleteCategory: function(id, success, error) {
                var request = {
                    method: 'DELETE',
                    url: baseServiceUrl + '/api/admin/categories/' + id,
                    headers: authService.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },

            getAllTowns: function(params, success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/admin/towns',
                    headers: authService.getAuthHeaders(),
                    params: params
                };
                $http(request).success(success).error(error);
            },

            getTownToEdit: function(id, success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/towns/' + id
                };
                $http(request).success(success).error(error);
            },

            createTown: function(townData, success, error) {
                var request = {
                    method: 'POST',
                    url: baseServiceUrl + '/api/admin/towns',
                    headers: authService.getAuthHeaders(),
                    data: townData
                };
                $http(request).success(success).error(error);
            },

            editTown: function(id, townData, success, error) {
                var request = {
                    method: 'PUT',
                    url: baseServiceUrl + '/api/admin/towns/' + id,
                    headers: authService.getAuthHeaders(),
                    data: townData
                };
                $http(request).success(success).error(error);
            },

            deleteTown: function(id, success, error) {
                var request = {
                    method: 'DELETE',
                    url: baseServiceUrl + '/api/admin/towns/' + id,
                    headers: authService.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            }
        }
    }
);
