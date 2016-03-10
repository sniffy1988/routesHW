(function () {
    function BordsService($http, $q, $firebaseObject, $firebaseArray) {
        //var baseUrl = "https://crackling-torch-3644.firebaseio.com/";
        var ref = new Firebase("https://crackling-torch-3644.firebaseio.com/boards");
        var getJson = $firebaseArray(ref.child('boards'));

        function _getBoards() {
            var defered = $q.defer();
            var getJson = $firebaseArray(ref);
            getJson.$loaded()
                .then(defered.resolve)
                .catch(defered.reject);
            return defered.promise;
        }

        function _remove(index) {
            var defer = $q.defer();
            getJson.$remove(index)
                .then(defer.resolve)
                .catch(defer.reject);
            return defer.promise;
        }

        function _addBoard(obj) {
            var defer = $q.defer();
            getJson.$add(obj)
                .then(defer.resolve)
                .catch(defer.reject);
            return defer.promise;
        }

        function _getNote(title) {
            var defer = $q.defer();
            var noteref = new Firebase("https://crackling-torch-3644.firebaseio.com/boards/boards/" + title + "/notes");
            var noteJson = $firebaseArray(noteref).$loaded().then(defer.resolve).catch(defer.reject);
            return defer.promise;
        }

        function _addNote(title, obj) {
            var defer = $q.defer();
            var noteref = new Firebase("https://crackling-torch-3644.firebaseio.com/boards/boards/" + title + "/notes");
            var noteJson = $firebaseArray(noteref).$add(obj).then(defer.resolve).catch(defer.reject);
            return defer.promise;
        }

        function _removeNote(index, path) {
            var defer = $q.defer();
            var noteref = new Firebase("https://crackling-torch-3644.firebaseio.com/boards/boards/" + path + "/notes");
            var noteJson = $firebaseObject(noteref.child(index)).$remove().then(defer.resolve).catch(defer.reject);
            return defer.promise;
        }

        return {
            getBoards: _getBoards,
            remove: _remove,
            addBoard: _addBoard,
            getNote: _getNote,
            addNote: _addNote,
            removeNote: _removeNote
        };
    }

    angular.module('boardsApp')
        .factory('BordsService', BordsService);
})();