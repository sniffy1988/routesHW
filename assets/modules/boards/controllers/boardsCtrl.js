(function () {
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
        this.validateBoard = function () {
            if (this.newTitle === '') {
                return false;
            }
            if (this.newDesc === '') {
                return false;
            }
            return (BordsService.isUnique(this.newTitle))
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
            var validateFlag = this.validateBoard();
            if (validateFlag) {
                BordsService.addBoard(this.tempBoard);
                this.initFields();
                this.initTempBoard();
            } else {
                confirm('Please checkout fields!');
            }
        }
    }

    angular.module('boardsApp')
        .controller('BoardsCtrl', ['BordsService', BoardsCtrl]);
})();