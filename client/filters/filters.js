angular.module('airport.filters', [])
  .filter('status', function() {
    return function(input) {
      if (!input) {
        return 'OFFLINE';
      } else {
        return 'ONLINE';
      }
    }
  })