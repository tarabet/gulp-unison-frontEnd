/**
 * Created by Shuriken on 20.11.2015.
 */

(function() {
    angular
        .module('appControllers')
        .controller('RegistrationController', RegistrationController);

    function RegistrationController (AuthSvc, $log, userAuthDataSvc, $timeout) {

        var vm = this;
        vm.loggedIn = false;

        vm.login = function(userObj) {

            vm.error = {};
            vm.error.login = null;
            vm.error.password = null;

            AuthSvc.$authWithPassword(userObj).then(function(auth) {
                    $log.debug('Success: ', auth);
                    userAuthDataSvc.usr.setMail(auth.password.email);
                    $timeout(function() {
                        vm.curUser = auth.password.email;
                        vm.loggedIn = true;
                    }, 1);
                },
                function(error) {
                    // Check what kind of error we got (login or password)
                    vm.error = error;
                    $log.log(vm.error);
                });
        };

        vm.register = function() {
            AuthSvc.$createUser(vm.user).then(function(_user) {
                    vm.login(vm.user);
                },
                function(error) {
                    vm.error = error;
                });
        };

    }
})();
