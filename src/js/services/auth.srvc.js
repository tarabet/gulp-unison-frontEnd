/**
 * Created by Shuriken on 20.11.2015.
 */

(function() {
    'use strict';

    angular
    .module('appServices')
    .factory('AuthSvc', AuthSvc);

    function AuthSvc(userAuthDataSvc, $firebaseAuth, constants, $q) {

        // Creates firebase connection Object
        function connect() {
            var ref, auth;
            ref = new Firebase(constants.FirebaseUrl);
            auth = $firebaseAuth(ref);
            return auth;
        }

        function checkLogin() {
            var defer = $q.defer();
            connect().$requireAuth().then(function(user) {
                defer.resolve(user);
            }, function(err) {
                defer.reject(err);
            });
            return defer.promise;
        }

        function login(obj) {
            var defer = $q.defer();
            connect().$authWithPassword(obj).then(function(auth) {
                defer.resolve(auth);
            }, function(err) {
                defer.reject(err)
            });
            return defer.promise;
        }

        function logout() {
            connect().$unauth();
        }

        return {
            connect: connect,
            checkLogin: checkLogin,
            login: login,
            logout: logout
        }

    }

})();
