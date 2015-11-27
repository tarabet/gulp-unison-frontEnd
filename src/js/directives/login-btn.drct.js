/**
 * Created by Shuriken on 20.11.2015.
 */

(function() {
    'use strict';

    angular
    .module('appDirectives')
    .directive('loginBtn', loginBtn);

    function loginBtn() {

        function link(scope, element, attrs, registrationCtrl) {

            element.find(".popup-close").click(function(e){
                e.preventDefault();
                element.hide();
            });
        }

        return {
            restrict: 'A',
            link: link,
            replace: true,
            controller: "registrationCtrl",
            templateUrl: "js/partials/dir-tmpl/login-btn-tmpl.html"
        }
    }

})();


