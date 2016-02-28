(function () {
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

        function _isUnique(title) {
            for (var key in boards) {
                var boards_title = boards[key].title;
                if (title === boards_title) {
                    return false;
                } else {
                    return true;
                }
            }
        }

        return {
            getBoards: _getBoards,
            remove: _remove,
            addBoard: addBoard,
            isUnique: _isUnique
        };
    }

    angular.module('boardsApp')
        .factory('BordsService', BordsService);
})();