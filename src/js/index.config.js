/**
 * Created by Shuriken on 06.11.2015.
 */

(function() {
    'use strict';

    angular
        .module('appConfig', [])
        .config(['$provide', Config]);

        function Config($provide) {

            // START INJECT SERVICE WITH EXTERNAL DATA URLS //
            $provide.factory('extDataUrls', function() {
                return {

                    keyAdvSlide: 'jsons/keyAdvSlide.json',
                    mainSlider: 'jsons/mainSlider.json',
                    fastMenu: 'jsons/fastMenu.json',
                    productsFilters: 'jsons/productsFilters.json',
                    orderForm: 'jsons/orderForm.json'


                    //keyAdvSlide: 'http://192.168.50.56:8080/ords/virtualbranch/interface/KeyAdvantages/1',
                    //mainSlider: 'http://192.168.50.56:8080/ords/virtualbranch/interface/SliderBlock/1',
                    //fastMenu: 'http://192.168.50.56:8080/ords/virtualbranch/interface/FastMenu/1',
                    //productsFilters: 'http://192.168.50.56:8080/ords/virtualbranch/reference/open/ProductStructure/1',
                    //orderForm: 'http://192.168.50.56:8080/ords/virtualbranch/reference/open/AnketaQuestTree/1/1/1'
                }
            });
            // END INJECT SERVICE WITH EXTERNAL DATA URLS //
        }

})();