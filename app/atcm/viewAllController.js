'use strict';

angular.module('atcm').controller('ViewAllController', ['$scope', 'atcmService',
	function($scope, atcmService) {
		
		$scope.cases = [];

		atcmService.getAllSjpCases().then(
			function success(response) {
				$scope.cases = response.data;
			},
			function failure(response) {

			}
		);
	}
]);