angular.module('airtraffic', [
    'airport.traffic',
    'airport.services',
    'airport.filters',
    'airport.directives',
    'ui.router'
  ])
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    '$locationProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider) {
      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('traffic', {
          templateUrl: 'airport-traffic/airport-traffic.html',
          controller: 'trafficController',
          url: '/'
        })

      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });
    }
  ]);