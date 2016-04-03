'use strict';

angular.module('atcm').controller('SearchController', ['$scope', 'atcmService',
	function($scope, atcmService) {		
		// $scope.searchResults = [];

		$scope.searchTerm = '';
		$scope.emptySearchTerm = false;
		$scope.error = false;
	
		$scope.search = function(searchTerm) { 	
			$scope.emptySearchTerm = false;
			$scope.error = false;

			if (searchTerm === '') {
				$scope.emptySearchTerm = true;
				return;
			} 			

			atcmService.search(searchTerm).then(
				function success(response) {
					$scope.searchResults = response.data;							
				},

				function fail(response) {
					$scope.searchResults = undefined;
					$scope.error = true;					
				}
			);			
		}
	}
]);