function LoginCtrl(LoginService) {
    var login = this;
    login.status = false;
    login.credentials = {
        name: "",
        password: '',
        isNewUser: false
    }
    function _validate() {
        var fl = false;
        var mailRegexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (login.credentials.name === '') {
            alert('Enter mail!');
            return fl;
        }
        if (login.credentials.password === '') {
            alert('Enter password!');
            return fl;
        }
        if (mailRegexp.test(login.credentials.name) === false) {
            alert('Enter correct mail!');
        }
        fl = true;
        return fl;
    }

    login.login = function () {
        var valResult = _validate();
        if (valResult) {
            login.status = LoginService.auth(login.credentials);
            if (login.status) {
                login.credentials.name = '';
                login.credentials.password = '';
            }
        }
    }
}

angular
    .module('boardsApp')
    .controller('LoginCtrl', LoginCtrl);