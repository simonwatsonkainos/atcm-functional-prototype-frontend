'use strict';

angular.module('atcm').controller('UpdatePleaController', ['$scope', '$stateParams', '$state', 'atcmService',
	function($scope, $stateParams, $state, atcmService) {
		$scope.plea = undefined;

		atcmService.getCaseById($stateParams.caseId).then(
			function success(response) {				
				$scope.case = response.data;
			}
		)

		$scope.savePlea = function() {
			atcmService.updatePlea($scope.case.id, $scope.plea).then(
				function success(response) {
					$state.go('caseOverview', { caseId : $scope.case.id});
				},
				function failure(response) {
					$scope.error = true;
				}
			);
		}
	}
]);	