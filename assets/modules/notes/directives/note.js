(function () {

    function note() {
        return {
            restrict: 'E',
            templateUrl: 'assets/modules/notes/html/note.html'
        }
    }

    angular.module('boardsApp')
        .directive('note', note);
})();