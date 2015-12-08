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

        var usr = {};

        usr.email = null;
        usr.loggedIn = null;

        usr.setMail = function (email) {
            usr.email = email;
        };

        usr.getMail = function () {
            return usr.email;
        };

        return {
            usr: usr
        };
    }

})();

