/**
 * Created by Shuriken on 19.10.2015.
 */

(function() {
    'use strict';

    angular
        .module('appDirectives')
        .directive('mainSlider', ['ajaxSvc', 'extDataUrls', MainSlider]);

    function MainSlider(ajaxSvc, extDataUrls) {

        var url = extDataUrls.mainSlider;

        function link(scope, element, attrs) {

            ajaxSvc.getData(url)

                .then(function (response) {
                    scope.mainSliderData = response.data;
                    // console.log('Main slider data obj:', scope.mainSliderData);
                },
                function (response) {
                    console.log('Some error happened: ', response);
                })

                .then(function () {

                    setTimeout(function () {

                        $(".slider-main-item.item-anim")
                            .mousemove(function (e) {
                                var _thisW = $(this).width();
                                var _coord = parseFloat(-((_thisW - e.clientX) / _thisW * 100 / 10));
                                $(this).find(".bg-img").css('left', _coord + '%')
                            });

                        $(".main-slider-block").height($(window).height() - 160);
                        $(".slider-main .slider-main-item").height($(window).height() - 160);

                        $('.slider-main').slick({
                            dots: false,
                            infinite: true,
                            speed: 300,
                            slidesToShow: 1
                        });

                    }, 1);

                });
        }

        return {
            restrict: 'A',
            link: link,
            replace: true,
            templateUrl :"js/partials/dir-tmpl/main-slider-tmpl.html"
        }
    }

})();