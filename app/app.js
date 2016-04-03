'use strict';

// Declare app level module which depends on views, and components
// angular.module('atcm', ['ngRoute']).
// config(['$routeProvider', function($routeProvider) {
angular.module('atcm', ['ui.router']).
config(function($stateProvider, $urlRouterProvider) {
  // $routeProvider.otherwise({redirectTo: '/home'});

  //$stateProvider, $urlRouterProvider

  $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "app/atcm/home.html",
      controller : 'HomeController'
    })
    .state('search', {
      url: "/search",
      templateUrl: "app/atcm/search.html",
      controller: 'SearchController'
    }).state('viewAll', {
      url: "/viewAll",
      templateUrl: "app/atcm/viewAll.html",
      controller: 'ViewAllController'
    }).state('caseOverview', {
      url: "/caseOverview/{caseId}",
      templateUrl: "app/atcm/caseOverview.html",
      controller: 'CaseOverviewController'
    }).state('updatePlea', {
      url: "/updatePlea/{caseId}",
      templateUrl: "app/atcm/updatePlea.html",
      controller: 'UpdatePleaController'
    });

  /* $routeProvider.when('/home', {
    templateUrl: 'app/atcm/home.html',
    controller: 'HomeController'
  });

  $routeProvider.when('/search', {
    templateUrl: 'app/atcm/search.html',
    controller: 'SearchController'
  });

  $routeProvider.when('/viewAll', {
    templateUrl: 'app/atcm/viewAll.html',
    controller: 'ViewAllController'
  });

  $routeProvider.when('/caseOverview/{caseId}', {
    templateUrl: 'app/atcm/caseOverview.html',
    controller: 'CaseOverviewController'
  });

  $routeProvider.when('/updatePlea', {
    templateUrl: 'app/atcm/updatePlea.html',
    controller: 'UpdatePleaController'
  }); */

});
