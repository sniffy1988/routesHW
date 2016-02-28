(function () {
    function lamp() {
        return {
            templateUrl: 'assets/modules/calculator/html/lamp.html'
        }
    }

    angular.module('boardsApp')
        .directive('lamp', lamp);
})();