/**
 * Created by Shuriken on 07.12.2015.
 */

(function() {
    angular
        .module('appControllers')
        .controller('AuthController', AuthController);

    function AuthController ($timeout, $log, AuthSvc, $state, userAuthDataSvc) {

        var vm = this;

        vm.loggedIn = false;
        vm.showLogModal = false;

        vm.user = {
            email: 'tarabet@yandex.ru',
            password: '123456'
        };

        // If user is logged-in "Login link" will go to "Profile" page
        vm.loginLinkLogic = function() {
            if (vm.loggedIn === false) {
                vm.showLogModal = true;
            } else {
                $state.go('userprofile');
            }
        };

        // Initiates at page-load to check if user is already logged in
        vm.checkLogin = function() {
            AuthSvc.$requireAuth().then(function(auth){
                vm.loggedIn = true;
                $timeout(function() {
                    vm.showLogModal = false;
                    vm.curUser = auth.password.email;
                }, 1);
            }, function(error){
                vm.loggedIn = false;
                $log.debug('User not logged in');
            });
        };

        // Triggers when "Login" button is pressed
        vm.login = function() {

            vm.error = {};
            vm.error.login = null;
            vm.error.password = null;

            AuthSvc.$authWithPassword(vm.user).then(function(auth) {
                    $state.go('home');
                    $log.debug('Success: ', auth);
                    userAuthDataSvc.usr.setMail(auth.password.email);
                    $timeout(function() {
                        vm.showLogModal = false;
                        vm.curUser = auth.password.email;
                        vm.loggedIn = true;
                    }, 1);
                },
                function(error) {
                    // Check what kind of error we got (login or password)
                    vm.error = error;
                    if(vm.error.message.search('The specified user does not exist') !== -1) {
                        vm.error.login = true;
                    } else if (vm.error.message.search('The specified password is incorrect') !== -1) {
                        vm.error.password = true;
                    } else {
                        $log.log(vm.error);
                    }
                });
        };

        vm.register = function() {
            AuthSvc.$createUser(vm.user).then(function(user) {
                    vm.login();
                },
                function(error) {
                    vm.error = error;
                });
        };

        vm.logout = function() {
            $log.debug('Unauth triggered');
            AuthSvc.$unauth();
            $timeout(function() {
                $state.go('home');
                vm.curUser = null;
                vm.loggedIn = false;
                vm.showLogModal = false;
            },1);
        };

        vm.curUser = vm.checkLogin();

    }
})();
