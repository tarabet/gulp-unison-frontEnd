/**
 * Created by Shuriken on 30.11.2015.
 */
// Service used to store current logged-in user's data
// It's used to share information about logged in user between controllers

(function() {
    'use strict';

    angular
        .module('appServices')
        .factory('userAuthDataSvc', [UserAuthDataSvc]);

    function UserAuthDataSvc() {

        var usr = {

            email: '',

            setMail: function(email) {
                this.email = email;
            },
            getMail: function() {
                return this.email;
            }

        };

        return {
            usr: usr
        };
    }

})();

