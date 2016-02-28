(function () {
    function BordsService($http, $q) {
        var baseUrl = "https://crackling-torch-3644.firebaseio.com/";

        function _getBoards() {
            var defered = $q.defer(),
                url = baseUrl + 'boards.json';
            var getJson = $http.get(url);
            getJson
                .then(defered.resolve)
                .catch(defered.reject);
            return defered.promise;
        }

        function _remove(index, obj) {
            var i = 0;
            var title = ''
            for (var key in obj) {
                if (i === index) {
                    title = key;
                }
                i++;
            }
            //delete obj[index];
            var defer = $q.defer();
            var name = '"' + obj["id"] + '"';
            var finalObj = {
                name: obj
            }
            var url = baseUrl + 'boards/' + title + '.json';
            var putJson = $http.delete(url, obj).then(defer.resolve).catch(defer.reject);
            return defer.promise;
        }

        function _addBoard(obj) {
            var defer = $q.defer();
            var name = '"' + obj["id"] + '"';
            var finalObj = {
                name: obj
            }
            var url = baseUrl + 'boards.json';
            var putJson = $http.post(url, obj).then(defer.resolve).catch(defer.reject);
            return defer.promise;
        }

        function _getNote(title) {
            var defer = $q.defer();
            var url = baseUrl + 'boards/' + title + '/notes.json';
            var noteJson = $http.get(url).then(defer.resolve).catch(defer.reject);
            return defer.promise;
        }

        function _addNote(title, obj) {
            var defer = $q.defer();
            var url = baseUrl + 'boards/' + title + '/notes.json';
            var noteJson = $http.post(url, obj).then(defer.resolve).catch(defer.reject);
            return defer.promise;
        }

        function _removeNote(index, path, obj) {
            var i = 0;
            var title = ''
            for (var key in obj) {
                if (i === index) {
                    title = key;
                }
                i++;
            }
            //delete obj[index];
            var defer = $q.defer();
            var name = '"' + obj["id"] + '"';
            var finalObj = {
                name: obj
            }
            var url = baseUrl + 'boards/' + path + '/notes/' + title + '.json';
            var putJson = $http.delete(url, obj).then(defer.resolve).catch(defer.reject);
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