(function () {

    function NotesCtrl(BordsService, $routeParams) {
        console.log($routeParams);
    }
    angular.module('boardsApp')
        .controller('NotesCtrl', ['BordsService', '$routeParams', NotesCtrl])
})();