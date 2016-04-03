'use strict';

angular.module('shop').factory('configService', [function() {
	return {
		servicesBaseUrl : 'http://localhost:8080/sjp-atcm-0.1.0/'
	}
}]);