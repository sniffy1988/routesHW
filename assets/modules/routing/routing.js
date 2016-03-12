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
            .when('/login', {
                templateUrl: 'assets/modules/login/loginform.html',
                controller: 'LoginCtrl as login'
            })
            .otherwise({
                redirectTo: '/'
            });
    }

    angular.module('boardsApp')
        .config(['$routeProvider', config]);
})();