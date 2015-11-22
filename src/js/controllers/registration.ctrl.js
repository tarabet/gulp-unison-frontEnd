/**
 * Created by Shuriken on 20.11.2015.
 */

(function() {
    angular
        .module('appControllers')
        .controller('registrationCtrl', ['$scope', '$firebaseAuth', RegistrationCtrl]);

    function RegistrationCtrl ($scope, $firebaseAuth) {

      var ref = new Firebase("https://boiling-inferno-2557.firebaseio.com");

      var auth = $firebaseAuth(ref);

      $scope.regFunct = {
        welcomeMessage: "Hello World",
        createUsr: function() {
          console.log($scope.regData.email);
          console.log($scope.regData.name);
          console.log($scope.regData.pass);
        }
      };


      $scope.regData = {
        email: '',
        name: '',
        pass: ''
      };
    }

})();
