/**
 * Created by Shuriken on 20.11.2015.
 */

(function() {
    angular
        .module('appControllers')
        .controller('registrationCtrl', ['AuthSvc', '$state', RegistrationCtrl]);

    function RegistrationCtrl (AuthSvc, $state) {

        var authCtrl = this;

        authCtrl.user = {
            email: '',
            password: ''
        };

        authCtrl.login = function() {
            AuthSvc.$authWithPassword(authCtrl.user).then(function(auth) {
                $state.go('home');
                console.log('Success: ', auth);
            },
            function(error) {
                authCtrl.error = error;
            });
        };

        authCtrl.register = function() {
            AuthSvc.$createUser(authCtrl.user).then(function(user) {
                authCtrl.login();
            },
            function(error) {
                authCtrl.error = error;
            });
        };

        authCtrl.logout = function() {
            console.log('Unauth triggered');
          AuthSvc.$unauth();
          $state.go('home');
        };

      }

})();
