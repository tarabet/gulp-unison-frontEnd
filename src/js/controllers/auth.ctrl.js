/**
 * Created by Shuriken on 07.12.2015.
 */

(function() {
    angular
        .module('appControllers')
        .controller('AuthController', AuthController);

    function AuthController (AuthSvc, $rootScope, $timeout, $log, $state, userAuthDataSvc) {

        $log.warn('AuthController instantinated');

        var vm = this;

        vm.loggedIn = function() {
            return userAuthDataSvc.loggedIn();
        };

        vm.curUser = function() {
            return $rootScope.curUser;
        };

        vm.showLogModal = false;

        vm.user = {
            email: userAuthDataSvc.email(),
            password: userAuthDataSvc.password()
        };

        vm.setCurUser = function(data) {
            $rootScope.curUser = data;
        };

        // If user is logged-in "Login link" will go to "Profile" page
        vm.loginLinkLogic = function() {
            if (!vm.loggedIn()) {
                vm.showLogModal = true;
            } else {
                $state.go('userprofile');
            }
        };

        // Initiates at page-load to check if user is already logged in
        AuthSvc.checkLogin().then(function (user) {
            $timeout(function() {
                vm.showLogModal = false;
                userAuthDataSvc.setLoggedIn(true);
                vm.setCurUser(user.password.email);
            }, 1);
        }, function(err) {
            userAuthDataSvc.setLoggedIn(false);
            $log.warn('User not logged in: ', err);
        });

        // Triggers when "Login" button is pressed
        vm.login = function() {

            vm.error = {};
            vm.error.login = null;
            vm.error.password = null;

            AuthSvc.login(vm.user).then(function(auth) {
                    $state.go('home');
                    $log.debug('Success: ', auth);
                    userAuthDataSvc.setMail(auth.password.email);
                    $timeout(function() {
                        vm.showLogModal = false;
                        userAuthDataSvc.setLoggedIn(true);
                        vm.setCurUser(auth.password.email);
                    }, 1);
                },
                function(err) {
                    // Check what kind of error we got (login or password)
                    vm.error = err;
                    if(vm.error.message.search('The specified user does not exist') !== -1) {
                        vm.error.login = true;
                    } else if (vm.error.message.search('The specified password is incorrect') !== -1) {
                        vm.error.password = true;
                    } else {
                        $log.warn(vm.error);
                    }
                });
        };

        vm.logout = function() {
            AuthSvc.logout();
            AuthSvc.checkLogin().catch(function() {
                $timeout(function() {
                    vm.showLogModal = false;
                    $state.go('home');
                    vm.setCurUser(null);
                    userAuthDataSvc.setLoggedIn(false);
                },500);
            });
        };

        //vm.curUser = vm.checkLogin();

    }
})();

