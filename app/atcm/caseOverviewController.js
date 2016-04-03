'use strict';

angular.module('atcm').controller('CaseOverviewController', ['$scope', '$stateParams', '$state', 'atcmService',
	function($scope, $stateParams, $state, atcmService) {		
		$scope.caseOverview = {};

		atcmService.getCaseById($stateParams.caseId).then(
			function success(response) {				
				$scope.caseOverview = response.data;
			},
			function failure(response) {

			}
		)

		$scope.updatePlea = function() {
			$state.go('updatePlea', { caseId : $scope.caseOverview.id });
		}
	}
]);