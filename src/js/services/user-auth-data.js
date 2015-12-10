/**
 * Created by Shuriken on 30.11.2015.
 */
// Service used to store current logged-in user's data
// It's used to share information about logged in user between controllers

(function() {
    'use strict';

    angular
        .module('appServices')
        .factory('userAuthDataSvc', UserAuthDataSvc);

    function UserAuthDataSvc() {

        function User () {

            var email = 'tarabet@yandex.ru';
            var password = "123456";
            var loggedIn = false;

            this.setLoggedIn = function(flag) {
                if (flag === true) {
                    loggedIn = true;
                } else if (flag === false) {
                    loggedIn = false;
                }
            };

            this.getLoggedIn = function () {
                return loggedIn;
            };

            this.setMail = function (e) {
               email = e;
            };

            this.getMail = function () {
                return email;
            };

            this.getPassword = function () {
                return password;
            };
        }

        var user = new User();

        return {
            email: user.getMail,
            password: user.getPassword,
            setLoggedIn: user.setLoggedIn,
            loggedIn: user.getLoggedIn,
            setMail: user.setMail
        };
    }

})();

