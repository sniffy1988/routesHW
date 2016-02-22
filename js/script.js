angular.module('boardsApp', ['ngRoute'])
    .config(['$routeProvider', config])
    .controller('BoardsCtrl', ['BordsService', BoardsCtrl])
    .controller('NotesCtrl', ['BordsService', '$routeParams', NotesCtrl])
    .controller('CalcCtrl', CalcCtrl)
    .factory('BordsService', BordsService);

function config($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partial/boards.html',
            controller: 'BoardsCtrl as boardCtrl'
        })
        .when('/board/:boardId', {
            templateUrl: 'partial/board.html',
            controller: 'NotesCtrl'
        })
        .when('/calculator', {
            templateUrl: 'partial/calculator.html',
            controller: 'CalcCtrl as calc'
        })
        .otherwise({
            redirectTo: '/'
        });
}

function NotesCtrl(BordsService, $routeParams) {
    console.log($routeParams);
}

function BoardsCtrl(BordsService) {
    this.boards = BordsService.getBoards();
    this.remove = function remove(index) {
        BordsService.remove(index);
    };
    this.newTitle = '';
    this.newDesc = '';
    this.newisPublic = false;
    this.tempBoard = {
        title: '',
        description: '',
        isPublic: ''
    }
    this.initTempBoard = function () {
        this.tempBoard = {
            title: '',
            description: '',
            isPublic: ''
        }
    }
    this.initFields = function () {
        this.newTitle = '';
        this.newDesc = '';
        this.newisPublic = false;
    }
    this.addNewBoard = function () {
        this.tempBoard.title = this.newTitle;
        this.tempBoard.description = this.newDesc;
        this.tempBoard.isPublic = this.newisPublic;
        BordsService.addBoard(this.tempBoard);
        this.initFields();
        this.initTempBoard();
    }
}

function BordsService() {
    var boards = {
        '0': {
            title: 'Title 1',
            description: 'Nice board',
            isPublic: false,
            notes: [],
            id: 0
        },
        '1': {
            title: 'Title 2',
            description: 'Not so nice board',
            isPublic: false,
            notes: [],
            id: 1
        }
    };

    function _getBoards() {
        return boards;
    }

    function _remove(index) {
        delete boards[index];
    }

    function _getlastID() {
        var id = 0;
        for (var key in boards) {
            var tempID = boards[key].id;
            if (id < tempID) {
                id = tempID;
            }
        }
        return id;
    }

    function addBoard(obj) {
        var needID = _getlastID() + 1;
        obj.id = needID;
        obj.notes = [];
        boards[needID] = obj;
        return boards;
    }
    return {
        getBoards: _getBoards,
        remove: _remove,
        addBoard: addBoard
    };
}

function CalcCtrl() {
    this.cost = 12;
    this.lumens = "600";
    this.usage = 1;

    //CALCULATIONS
    this.powerCalc = function (type) {
        var lum = parseInt(this.lumens);
        switch (type) {
        case 'inc':
            return (lum * 0.0625).toFixed(1);
            break;
        case 'hal':
            return (lum * 0.0450).toFixed(1);
            break;
        case 'cfl':
            return (lum * 0.0146).toFixed(1);
            break;
        case 'led':
            return (lum * 0.0125).toFixed(1);
            break;
        }
    };
    this.yearCost = function (type) {
        var lum = parseInt(this.lumens);
        switch (type) {
        case 'inc':
            return ((((lum * 0.0625).toFixed(1) * 365 * this.usage) / 1000) * (this.cost / 100)).toFixed(2);
            break;
        case 'hal':
            return ((((lum * 0.0450).toFixed(1) * 365 * this.usage) / 1000) * (this.cost / 100)).toFixed(2);
            break;
        case 'cfl':
            return ((((lum * 0.0146).toFixed(1) * 365 * this.usage) / 1000) * (this.cost / 100)).toFixed(2);
            break;
        case 'led':
            return ((((lum * 0.0125).toFixed(1) * 365 * this.usage) / 1000) * (this.cost / 100)).toFixed(2);
            break;
        }
    }
}