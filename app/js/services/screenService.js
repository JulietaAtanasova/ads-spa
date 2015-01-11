app.factory('screenService', function() {
    var screenTitle = '';

    function getScreenTitle() {
        return screenTitle;
    }

    function setScreenTitle(title) {
        screenTitle = title;
    }
    return {
        getScreenTitle: getScreenTitle,
        setScreenTitle: getScreenTitle
    }
});
