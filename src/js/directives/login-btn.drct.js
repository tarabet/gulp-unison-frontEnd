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

            // Commented Controller because it is instantiated inside directive template
            // via ng-controller="AuthController as vm"
            // This doubles controller instantiation

            //controller: "AuthController",
            //controllerAs: "vm",
            templateUrl: "js/partials/dir-tmpl/login-btn-tmpl.html"
        }
    }

})();


