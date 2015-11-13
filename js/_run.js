/**
 * Created by Shuriken on 06.11.2015.
 */

angular.module('appRun', [])
    .run([
        '$rootScope',
        '$state',
        '$stateParams',

        function ($rootScope,   $state,   $stateParams) {


            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;

            $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
                //console.log('event:', event);
                //console.log('toState:', toState);
                //console.log('toParams:', toParams);
                //console.log('fromState:', fromState);
                //console.log('fromParams:', fromParams);

                if (toState.data.requireLogin === true) {
                    event.preventDefault();
                    console.log('THIS SECTION REQUIRES LOGIN');
                } else {
                    console.log('NO LOGIN REQUIRED ON THIS PAGE');
                }
            });

            $rootScope.username = 'TEMPORARY USERNAME';
        }
]);
