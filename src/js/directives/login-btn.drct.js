/**
 * Created by Shuriken on 20.11.2015.
 */

(function() {
    'use strict';

    angular
    .module('appDirectives')
    .directive('loginBtn', loginBtn);

    function loginBtn() {

        function link(scope, element, attrs, authCtrl) {
            //nothing here right now
        }

        return {
            restrict: 'A',
            link: link,
            replace: true,
            controller: "AuthController",
            controllerAs: "vm",
            templateUrl: "js/partials/dir-tmpl/login-btn-tmpl.html"
        }
    }

})();


