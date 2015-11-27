/**
 * Created by Shuriken on 06.11.2015.
 */

// We store constant data in this module. This data is not supposed to changed any other way but manually
// And can be injected constants in any module

(function() {

    'use strict';

        angular
        .module('appConstants', [])
        .constant('constants', {
            version: '1.0.0',
            FirebaseUrl: 'https://boiling-inferno-2557.firebaseio.com'
        });

})();


