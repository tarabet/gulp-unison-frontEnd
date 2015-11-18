(function() {

    angular
        .module('appDirectives')
        .directive('keyAdvantages', ['ajaxSvc', 'extDataUrls', KeyAdvantages]);

    function KeyAdvantages(ajaxSvc, extDataUrls) {

        var keyAdvSlide = {};
        var inViewBlock;

        keyAdvSlide.url = extDataUrls.keyAdvSlide;

        function link(scope, element, attrs) {

            //This is Angular module which checks if an element is inView
            //and then attaches "animated" style to it. This style makes fadein and scale animation
            //All data is taken from template file: src/js/partials/dir-tmpl/key-advantage-tmpl.html
            //Read https://github.com/thenikso/angular-inview about this plugin
            scope.inViewTrigger = function(inview, event) {
                inViewBlock = event.inViewTarget;
                if (inview) {
                    $(inViewBlock).find('.text').addClass('animated');
                    $(inViewBlock).find('.img').addClass('animated');
                }
                //console.log('inview: ', inview);
                //console.log('event: ', event.inViewTarget);
            };

            //This jQuery function is responsible for text padding in the advatages container
            //The padding is being calculated from current screen dimentions
            //This needs to be adjusted for proper text positioning
            $('.key-advantage .container .text').each(function () {
                var _parentH = $(this).parent().innerHeight();
                var _thisH = $(this).innerHeight();

                var _padding = (_parentH - _thisH) / 2;
                $(this).css("padding-top", _padding);
            });

            ajaxSvc.getData(keyAdvSlide.url)
                .then(function (response) {
                    scope.ajxObj = response.data;
                    console.log('Advantages obj is:', scope.ajxObj);
                },
                function (response) {
                    console.log('Some error happened: ', response);
                });
        }

        return {
            restrict: 'A',
            link: link,
            templateUrl: 'js/partials/dir-tmpl/key-advantage-tmpl.html',
            replace: true
        };
    }

})();