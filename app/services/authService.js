app.factory('authentication', function() {
    var key = 'user';

    function saveUserData(data) {
        localeStorage.setItem(key, data);
    }

    function getUserData() {
        localeStorage.getItem(key);
    }
    return {
    	saveUser: saveUserData,
    	getUser: getUserData
    };
})
