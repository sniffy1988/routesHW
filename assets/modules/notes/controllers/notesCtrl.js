(function () {

    function NotesCtrl(BordsService, $routeParams) {
        var note = this;
        this.notes = {};
        function _UpdateNotes() {
            var notesPromise = BordsService.getNote($routeParams.boardId);
            notesPromise.then(function (result) {
                note.notes = result;
            }).catch(function (error) {
                console.log(error);
            })
        }

        function _validate() {
            var fl = false;
            if (!(note.tempNote.title) || note.tempNote.title === '') {
                alert('Please fill all fields');
                return fl;
            }
            if (!(note.tempNote.description) || note.tempNote.description === '') {
                alert('Please fill all fields');
                return fl;
            }
            return true;
        }

        this.tempNote = {};
        this.addNote = function () {
            var validateFlag = _validate();
            if (validateFlag) {
                var notePromise = BordsService.addNote($routeParams.boardId, this.tempNote);
                notePromise.then(function () {
                    note.tempNote = {
                        title: '',
                        description: ''
                    };
                    _UpdateNotes();
                });
                notePromise.catch(function (error) {
                    console.log(error);
                });
            }
        }
        this.remove = function (index) {
            var removePromice = BordsService.removeNote(index, $routeParams.boardId, this.notes);
            removePromice.then(function () {
                _UpdateNotes();
            }).catch(function (error) {
                console.log(error);
            })
        }
        _UpdateNotes();
    }

    angular.module('boardsApp')
        .controller('NotesCtrl', ['BordsService', '$routeParams', NotesCtrl])
})();