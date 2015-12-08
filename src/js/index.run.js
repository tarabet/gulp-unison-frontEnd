/**
 * Created by Shuriken on 06.11.2015.
 */

(function() {
    'use strict';

    angular
        .module('appRun', [])
        .run(['$rootScope', '$state', '$stateParams', 'AuthSvc', Run]);

        function Run ($rootScope,   $state,   $stateParams) {

            $rootScope.curUser = null;

            $rootScope.topcycle = function () {
                if($state.includes('home')) {
                    $state.go('needs');
                } else if ($state.includes('needs')) {
                    $state.go('productsandservices');
                } else if ($state.includes('productsandservices')) {
                    $state.go('home');
                } else {
                    $state.go('home');
                }
            };

            // It's very handy to add references to $state and $stateParams to the $rootScope
            // so that you can access them from any scope within your applications.For example,
            // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
            // to active whenever 'contacts.list' or one of its decendents is active.
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;

            // variable started from "_" sign is being ignored by ESLINT no-unused-vars rule
            var _catchRequireLogin = $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, _fromParams) {
                //console.log('event:', event);
                //console.log('toState:', toState);
                //console.log('toParams:', toParams);
                //console.log('fromState:', fromState);
                //console.log('fromParams:', fromParams);

                if (toState.data.requireLogin === true) {
                    event.preventDefault();
                    // console.log('THIS SECTION REQUIRES LOGIN');
                } else {
                    // console.log('NO LOGIN REQUIRED ON THIS PAGE');
                }
            });

            var _catchStates = $rootScope.$on('$stateChangeSuccess', function(ev, to, toParams, from, _fromParams) {
                $rootScope.previousState = from.name;
                $rootScope.currentState = to.name;
            });

            $rootScope.goBack = function() {
                    $state.go($rootScope.previousState);
            }
        }

})();
