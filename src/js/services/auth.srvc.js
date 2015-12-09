/**
 * Created by Shuriken on 20.11.2015.
 */

(function() {
    'use strict';

    angular
    .module('appServices')
    .factory('AuthSvc', AuthSvc);

    function AuthSvc($log, userAuthDataSvc, $firebaseAuth, constants) {

        function connect() {
            var ref, auth;
            ref = new Firebase(constants.FirebaseUrl);
            auth = $firebaseAuth(ref);
            return auth;
        }

        function checkLogin() {
            var promise;
            promise = connect().$requireAuth().then(function(auth) {
                    return auth;
                }, function(error) {
                    return error;
                });

            return promise;
        }

        return {
            connect: connect(),
            checkLogin: checkLogin()
        }

    }

})();
