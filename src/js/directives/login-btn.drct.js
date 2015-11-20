/**
 * Created by Shuriken on 20.11.2015.
 */

(function() {

    angular
        .module('appDirectives')
        .directive('loginBtn', loginBtn);

    function loginBtn() {

        function link(scope, element, attrs) {

            element.find(".popup-close").click(function(e){
                e.preventDefault();
                element.hide();
            });

        }

        return {
            restrict: 'A',
            link: link,
            replace: true,
            templateUrl: "js/partials/dir-tmpl/login-btn-tmpl.html"
        }
    }

})();


