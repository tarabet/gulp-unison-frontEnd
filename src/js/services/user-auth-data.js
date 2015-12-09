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

            this.email = 'tarabet@yandex.ru';
            this.password = "123456";
            var _loggedIn = null;

            this.setMail = function (email) {
                this.email = email;
            };

            this.getMail = function () {
                return this.email;
            };
        }

        var user = new User();

        return {
            email: user.email,
            password: user.password,
            setMail: user.setMail
        };
    }

})();

