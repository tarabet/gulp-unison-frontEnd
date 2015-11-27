/**
 * Created by Shuriken on 30.10.2015.
 */

//ngAnimate has bug working with ui-router and jQuery
//The bug is solved by small patch in 2508 string of angular-animate.js

(function() {
    'use strict';

    angular
    .module('appDirectives', [
            'angular-inview',
            'slick',
            'ngAnimate'
        ]);

})();
