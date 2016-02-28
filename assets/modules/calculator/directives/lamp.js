(function () {
    function lamp() {
        return {
            restrict: 'E',
            templateUrl: 'assets/modules/calculator/html/lamp.html'
        }
    }

    angular.module('boardsApp')
        .directive('lamp', lamp);
})();