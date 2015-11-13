/**
 * Created by Shuriken on 06.11.2015.
 */

angular.module('appRooting', ['ui.router'])
    .config([
        '$stateProvider',
        '$urlRouterProvider',

        function($stateProvider, $urlRouterProvider) {

        // ROOTING BLOCK STARTS HERE //
        var delay = function ($q, $timeout) {
            var delay = $q.defer();
            $timeout(delay.resolve, 1);
            // SOME CODE THAT TRIGGERS WITH DELAY SPECIFIED
            return delay.promise;
        };

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                // controller: 'homepageCtrl',
                // templateUrl: 'js/partials/*.html',
                data: {requireLogin: false},
                resolve: {
                    // I will cause a 1 second delay
                    delay: delay
                }
            })
    }]);
