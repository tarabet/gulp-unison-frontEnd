/**
 * Created by Shuriken on 24.10.2015.
 */

(function() {
    'use strict';

    angular
        .module('appDirectives')
        .directive('bigMenu', BigMenu);

    function BigMenu() {

        function link(scope, element, attrs) {

            $('.menu-btn').click(function (e) {
                e.preventDefault();
                $('.big-menu').show();
            });
            $('.close-big-menu').click(function (e) {
                e.preventDefault();
                $('.big-menu').hide();
            });

        }

        return {
            restrict: 'A',
            link: link,
            replace: true,
            templateUrl: "js/partials/dir-tmpl/big-menu-tmpl.html"
        }
    }

})();
