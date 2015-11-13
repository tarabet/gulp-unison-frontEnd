/**
 * Created by Shuriken on 06.11.2015.
 */

angular.module('appConfig', [])
    .config([
        '$provide',

        function($provide) {

            $provide.factory('someFactory', function() {
                return {
                   someReturn: 'empty return',
                }
            });

}]);
