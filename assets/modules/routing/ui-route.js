angular.module('boardsApp').config(function ($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/login");
    //
    // Now set up the states
    $stateProvider
        .state('login', {
            url: "/login",
            templateUrl: "assets/modules/login/loginform.html",
            controller: "LoginCtrl as login"
        })
        .state('/board/:boardId', {
            templateUrl: 'assets/modules/boards/html/board.html',
            controller: 'NotesCtrl as noteCtrl',
        })
        .state('calculator', {
            url: '/calculator',
            templateUrl: 'assets/modules/calculator/html/calculator.html',
            controller: 'CalcCtrl as calc'
        });
});