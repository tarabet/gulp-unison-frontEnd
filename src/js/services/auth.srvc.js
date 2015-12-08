/**
 * Created by Shuriken on 20.11.2015.
 */

(function() {
    'use strict';

    angular
    .module('appServices')
    .factory('AuthSvc', AuthSvc);

    function AuthSvc($firebaseAuth, constants) {

        var ref, auth;

        ref = new Firebase(constants.FirebaseUrl);
        auth = $firebaseAuth(ref);

        return auth;
    }

})();
