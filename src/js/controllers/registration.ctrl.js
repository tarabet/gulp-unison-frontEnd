/**
 * Created by Shuriken on 20.11.2015.
 */

(function() {
    angular
        .module('appControllers')
        .controller('registrationCtrl', ['AuthSvc', '$state', 'userAuthDataSvc', RegistrationCtrl]);

    function RegistrationCtrl (AuthSvc, $state, userAuthDataSvc) {

        var authCtrl = this;
        authCtrl.loggedIn = false;

        authCtrl.user = {
            email: 'tarabet@yandex.ru',
            password: '123456'
        };

        authCtrl.login = function() {
            AuthSvc.$authWithPassword(authCtrl.user).then(function(auth) {
                $state.go('home');
                console.log('Success: ', auth);
                userAuthDataSvc.usr.setMail(auth.password.email);
                //ToDO: need to find way to get rid of jQuery
                $('.popup').hide();
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
