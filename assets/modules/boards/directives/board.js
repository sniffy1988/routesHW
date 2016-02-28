(function () {
    function board() {
        return {
            restrict: 'E',
            templateUrl: 'assets/modules/boards/html/singleBoard.html'
        }
    }

    angular.module('boardsApp')
        .directive('board', board);
})();