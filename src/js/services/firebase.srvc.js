/**
 * Created by Shuriken on 20.11.2015.
 */

(function() {

    angular
        .module('appServices')
        .factory('AuthSvc', ['$firebaseAuth', 'constants', AuthSvc]);

    function AuthSvc($firebaseAuth, constants) {

        var ref = new Firebase(constants.FirebaseUrl);
        auth = $firebaseAuth(ref);

        return auth;
    }

})();
