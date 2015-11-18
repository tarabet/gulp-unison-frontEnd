/**
 * Created by Shuriken on 24.10.2015.
 */

(function() {
    angular
        .module('appDirectives')
        .directive('fastMenu', ['ajaxSvc', 'extDataUrls', FastMenu]);

        function FastMenu(ajaxSvc, extDataUrls) {

            var url = extDataUrls.fastMenu;

            function link(scope, element, attrs) {

                ajaxSvc.getData(url)

                    .then(function (response) {
                        scope.fastMenuData = response.data;
                        console.log('Fast menu data obj:', scope.fastMenuData);
                    },
                    function (response) {
                        console.log('Some error happened: ', response);
                    });

                    // Section commented as no additional code to be applied to template;
                    //.then(function () {
                    //
                    //setTimeout(function () {
                    //
                    //    // NO JQUERY CODE INCLUDED RIGHT NOW
                    //
                    //}, 1);
                    //
                    //});
            }

            return {
                restrict: 'A',
                link: link,
                replace: true,
                templateUrl: "js/partials/dir-tmpl/fast-menu-tmpl.html"
            }
        }
})();

