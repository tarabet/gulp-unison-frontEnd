/**
 * Created by Shuriken on 02.11.2015.
 */

(function() {
    'use strict';

    angular
        .module('appDirectives')
        .directive('targetBlank', targetBlank);

    function targetBlank() {
        return {
            restrict: 'A',
            compile: function(element) {
                var elems = (element.prop("tagName") === 'A') ? element : element.find('a');
                elems.attr("target", "_blank");

            }
        };
    }

})();
