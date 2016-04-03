'use strict';

angular.module('atcm').factory('atcmService', ['$http',
	function($http) {	

		var baseUrl = "http://localhost:8090/sjp-case/";

		var search = function(searchTerm) {
			return $http.get(baseUrl + 'search?q=' + searchTerm);
		}

		var getCaseById = function(id) {
			return $http.get(baseUrl + id);
		}

		var getAllSjpCases = function() {
			return $http.get(baseUrl + 'getAll');
		}

		var updatePlea = function(caseid, updatedPlea) {
			return $http.post(baseUrl + caseid + '/updatePlea', { plea : updatedPlea });
		}		

		return {
			search : search,
			getCaseById : getCaseById,
			getAllSjpCases : getAllSjpCases,
			updatePlea : updatePlea
		}
	}
])