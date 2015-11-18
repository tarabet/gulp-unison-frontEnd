(function() {

	angular
		.module('appServices')
		.factory('ajaxSvc', ['$http', ajaxSvc]);

	function ajaxSvc($http) {

		return {
			getData: function(url) {
				return $http.get(url);
			}
		}
	}

})();