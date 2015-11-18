(function() {

    angular
        .module('appDirectives')
        .directive('keyAdvantages', ['ajaxSvc', 'extDataUrls', KeyAdvantages]);

    function KeyAdvantages(ajaxSvc, extDataUrls) {

        var keyAdvSlide = {};

        keyAdvSlide.url = extDataUrls.keyAdvSlide;

        function link(scope, element, attrs) {

            ajaxSvc.getData(keyAdvSlide.url)
                .then(function (response) {
                    scope.ajxObj = response.data;
                    console.log('Advantages obj is:', scope.ajxObj);
                },
                function (response) {
                    console.log('Some error happened: ', response);
                })

                .then(function () {

                    setTimeout(function () {
                        $('.key-advantage .container .text').each(function () {
                            var _parentH = $(this).parent().innerHeight();
                            var _thisH = $(this).innerHeight();

                            var _padding = (_parentH - _thisH) / 2;
                            $(this).css("padding-top", _padding);
                        });

                        $('.key-advantage .text').bind('inview', function (event, visible, topOrBottomOrBoth) {
                            if (visible) {
                                $(this).addClass('animated');
                            }
                        });
                        $('.key-advantage .img').bind('inview', function (event, visible, topOrBottomOrBoth) {
                            if (visible) {
                                $(this).addClass('animated');
                            }
                        });

                    }, 500);
                })
        }

        return {
            restrict: 'A',
            link: link,
            templateUrl: 'js/partials/dir-tmpl/key-advantage-tmpl.html',
            replace: true
        };
    }

})();