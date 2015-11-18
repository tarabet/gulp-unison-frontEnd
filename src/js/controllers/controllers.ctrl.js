(function() {

    angular
        .module('appControllers')
        .controller('homepageCtrl', ['$scope', homepageCtrl])
        .controller('prodsnsrvcsCtrl', ['$scope', '$state', '$stateParams', prodsnsrvcsCtrl])
        .controller('productsCtrl', ['$scope', productsCtrl])
        .controller('prodscreditCtrl', ['$scope', prodscreditCtrl]) //Maybe will not be used
        .controller('safeRentCtrl', ['$scope', safeRentCtrl]) //Maybe will not be used
        .controller('maininfosectionCtrl', ['$scope', maininfosectionCtrl])
        .controller('catalognewsCtrl', ['$scope', catalognewsCtrl])
        .controller('catalogspecoffersCtrl', ['$scope', catalogspecoffersCtrl])
        .controller('contactsCtrl', ['$scope', contactsCtrl])
        .controller('promocorpcustomersCtrl', ['$scope', promocorpcustomersCtrl])
        .controller('newsCtrl', ['$scope', newsCtrl])
        .controller('specialofferCtrl', ['$scope', specialofferCtrl])
        .controller('catalognotificationsCtrl', ['$scope', catalognotificationsCtrl])
        .controller('userprofileCtrl', ['$scope', userprofileCtrl])
        .controller('catalogrequestsCtrl', ['$scope', catalogrequestsCtrl])
        .controller('faqCtrl', ['$scope', faqCtrl])
        .controller('productCtrl', ['$scope', productCtrl])
        .controller('productcreditCtrl', ['$scope', productcreditCtrl]) //Maybe will not be used
        .controller('orderCtrl', ['$scope', '$state', '$stateParams', 'ajaxSvc', orderCtrl])
        .controller('needsCtrl', ['$scope', needsCtrl])
        .controller('departmentsmapCtrl', ['$scope', departmentsmapCtrl])
        .controller('departmentsmaplistCtrl', ['$scope', departmentsmaplistCtrl]) //Maybe will not be used
        .controller('productscreditCtrl', ['$scope', productscreditCtrl]); //Maybe will not be used

    function homepageCtrl($scope) {
        //Do nothing right now
    }

    function prodsnsrvcsCtrl ($scope, $state, $stateParams ) {
        $scope.$stateParams = $stateParams;
        console.log('State params:', $scope.$stateParams);
    }

    function productsCtrl ($scope) {
            //Do nothing right now
    }

    function prodscreditCtrl ($scope) {
        //Do nothing right now
    }

    function safeRentCtrl ($scope) {
        //Do nothing right now
    }

    function maininfosectionCtrl ($scope) {
        //Do nothing right now
    }

    function catalognewsCtrl ($scope) {
        //Do nothing right now
    }

    function catalogspecoffersCtrl ($scope) {
        //Do nothing right now
    }

    function contactsCtrl ($scope) {
        //Do nothing right now
    }

    function promocorpcustomersCtrl ($scope) {
        //Do nothing right now
    }

    function newsCtrl ($scope) {
        //Do nothing right now
    }

    function specialofferCtrl ($scope) {
        //Do nothing right now
    }

    function catalognotificationsCtrl ($scope) {
        //Do nothing right now
    }

    function userprofileCtrl ($scope) {
        $scope.helloMessage = "Hello Userprofile";
        console.log($scope.helloMessage);
    }

    function catalogrequestsCtrl ($scope) {
        //Do nothing right now
    }

    function faqCtrl ($scope) {
        //Do nothing right now
    }

    function productCtrl ($scope) {
        //Do nothing right now
    }

    function productcreditCtrl ($scope) {
        //Do nothing right now
    }

    function orderCtrl ($scope, $state, $stateParams, ajaxSvc ) {
        $scope.$stateParams = $stateParams;
        console.log('State params:', $scope.$stateParams);
    }

    function needsCtrl ($scope) {
        //Do nothing right now
    }

    function departmentsmapCtrl ($scope) {
        //Do nothing right now
    }

    function departmentsmaplistCtrl ($scope) {
        //Do nothing right now
    }

    function productscreditCtrl ($scope) {
        //Do nothing right now
    }

})();