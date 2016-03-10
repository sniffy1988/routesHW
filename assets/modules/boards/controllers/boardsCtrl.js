(function () {
    function BoardsCtrl(BordsService) {
        var bc = this;
        bc.boardsTitles = [];
        function _getLastID() {
            var maxID = 0;
            var obj = bc.boards;
            for (var key in obj) {
                if (obj[key].id > maxID) {
                    maxID = obj[key].id;
                }
            }
            return maxID;
        }

        this.getTitle = function (index) {
            return this.boardsTitles[index];
        }

        function _updateJson() {
            var getJson = BordsService.getBoards();
            getJson
                .then(function (result) {
                    bc.boards = result[0];
                    bc.boardsTitles = Object.keys(bc.boards);
                })
                .catch(function (error) {
                    console.log(error);
                })
        }

        this.boards = {};
        this.remove = function remove(index) {
            var promise = BordsService.remove(index);
            promise
                .then(function () {
                    _updateJson();
                })
                .catch(function (error) {
                    console.log(error);
                });
        };
        this.newTitle = '';
        this.newDesc = '';
        this.newisPublic = false;
        this.tempBoard = {
            title: "",
            description: "",
            isPublic: "",
            "notes": {}
        }
        this.validateBoard = function () {
            if (this.newTitle === '') {
                return false;
            }
            if (this.newDesc === '') {
                return false;
            }
            return true;
        }
        bc.initTempBoard = function () {
            this.tempBoard = {
                title: "",
                description: "",
                isPublic: false,
                "notes": {}
            }
        }
        bc.initFields = function () {
            this.newTitle = "";
            this.newDesc = "";
            this.newisPublic = false;
        }
        this.addNewBoard = function () {
            this.tempBoard.title = this.newTitle;
            this.tempBoard.description = this.newDesc;
            this.tempBoard.isPublic = this.newisPublic;
            //this.tempBoard.id = _getLastID() + 1;
            var validateFlag = this.validateBoard();
            if (validateFlag) {
                var addBoard = BordsService.addBoard(bc.tempBoard);
                addBoard
                    .then(function () {
                        _updateJson();
                        bc.initFields();
                        bc.initTempBoard();
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
            } else {
                confirm('Please checkout fields!');
            }
        }
        _updateJson();
    }

    angular.module('boardsApp')
        .controller('BoardsCtrl', ['BordsService', BoardsCtrl]);
})();