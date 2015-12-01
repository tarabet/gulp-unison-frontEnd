/**
 * Created by Shuriken on 20.11.2015.
 */

(function() {
    angular
        .module('appControllers')
        .controller('registrationCtrl', ['$timeout', 'AuthSvc', '$state', 'userAuthDataSvc', RegistrationCtrl]);

    function RegistrationCtrl ($timeout, AuthSvc, $state, userAuthDataSvc) {

        var authCtrl = this;

        authCtrl.loggedIn = null;
        authCtrl.showLogModal = false;

        authCtrl.user = {
            email: 'tarabet@yandex.ru',
            password: '123456'
        };

        authCtrl.checkLogin = function() {
            AuthSvc.$requireAuth().then(function(auth){
                authCtrl.loggedIn = true;
                $timeout(function() {
                    authCtrl.showLogModal = false;
                    authCtrl.curUser = auth.password.email;
                    console.log('User logged in');
                }, 1);
            }, function(error){
                authCtrl.loggedIn = false;
                console.log('User not logged in');
            });
        };

        authCtrl.login = function() {
            AuthSvc.$authWithPassword(authCtrl.user).then(function(auth) {
                $state.go('home');
                console.log('Success: ', auth);
                userAuthDataSvc.usr.setMail(auth.password.email);
                $timeout(function() {
                    authCtrl.showLogModal = false;
                    authCtrl.curUser = auth.password.email;
                    authCtrl.loggedIn = true;
                }, 1);
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
            $timeout(function() {
                $state.go('home');
                authCtrl.curUser = null;
                authCtrl.loggedIn = false;
                authCtrl.showLogModal = false;
            },1);
        };

        authCtrl.curUser = authCtrl.checkLogin();

      }
})();
