(function () {
    function config($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'assets/modules/boards/html/boards.html',
                controller: 'BoardsCtrl as boardCtrl'
            })
            .when('/board/:boardId', {
                templateUrl: 'assets/modules/boards/html/board.html',
                controller: 'NotesCtrl as noteCtrl',
            })
            .when('/calculator', {
                templateUrl: 'assets/modules/calculator/html/calculator.html',
                controller: 'CalcCtrl as calc'
            })
            .otherwise({
                redirectTo: '/'
            });
    }

    angular.module('boardsApp')
        .config(['$routeProvider', config]);
})();