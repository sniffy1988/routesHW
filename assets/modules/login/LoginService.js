function LoginService($firebase, $firebaseArray) {
    var url = 'https://crackling-torch-3644.firebaseio.com/boards/users';
    var ref = new Firebase(url);
    var usersList = $firebaseArray(ref);
    var listUsers;
    usersList.$loaded()
        .then(function (result) {
            listUsers = result;
        })
        .catch(function (error) {
            console.log(error);
        });
    function _checkName(cred) {
        var fl = false;
        for (var i = 0; i < listUsers.length; i++) {
            if (cred.name === listUsers[i].mail && cred.password === listUsers[i].password.toString()) {
                fl = true;
                break;
            }
        }
        return fl;
    }

    function _newUser(cred) {
        var newuser = {
            mail: cred.name,
            password: cred.password
        }
        usersList.$add(newuser);
    }

    function _auth(cred) {
        var isNew = cred.isNewUser;
        if (isNew) {
            _newUser(cred);
            return true;
        } else {
            var resultName = _checkName(cred);
            return resultName;
        }
    }

    return {
        auth: _auth
    }
}

angular.module('boardsApp').service('LoginService', LoginService);