(function () {
    function linker($scope, $element, $attrs) {

    }

    function board() {
        return {
            restrict: 'E',
            templateUrl: 'assets/modules/boards/html/singleBoard.html',
            link: linker
        }
    }

    angular.module('boardsApp')
        .directive('board', board);
})();