angular.module('airport.traffic', [])
  .controller('trafficController', [
    '$scope',
    'GetAirCraft',
    'ATCSystem',
    function($scope, GetAirCraft, ATCSystem) {
      $scope.status = ATCSystem.status;
      $scope.head = ATCSystem.head;
      $scope.arrival = 1;

      $scope.boot = function() {
        ATCSystem.boot();
        $scope.status = ATCSystem.status;
      }
      $scope.shutdown = function() {
        ATCSystem.shutdown();
        $scope.status = ATCSystem.status;
      }
      $scope.getAC = function() {
        if ($scope.status) {
          $scope.arrival = GetAirCraft.getAC();
        }
      }
      $scope.enqueue = function() {
        ATCSystem.enqueue($scope.arrival);
        $scope.arrival = 1;
      }
      $scope.dequeue = function() {
        ATCSystem.dequeue();
      }
    }
  ])