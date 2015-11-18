/**
 * Created by Shuriken on 04.11.2015.
 */

(function() {

    angular
        .module('appServices')
        .factory('cookiesSvc', ['$cookies', cookiesSvc]);

    function cookiesSvc($cookies) {
        function getCookie(key) {
            return $cookies.get(key);
        }

        function getAllCookies() {
            return $cookies.getAll();
        }

        function setCookie(key, value) {
            $cookies.put(key, value);
        }

        return {
            getCookie: getCookie,
            getAllCookies: getAllCookies(),
            setCookie: setCookie
        }
    }

})();
