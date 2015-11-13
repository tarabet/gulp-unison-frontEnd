/**
 * Created by Shuriken on 29.10.2015.
 */

appDirectives.directive('myDirective', [

    function () {

    function link(scope, element, attrs) {

    }

    return {
        restrict: 'A',
        link: link,
        replace: false,
        template: '<div class="someClassHere"></div>'
    }
}]);