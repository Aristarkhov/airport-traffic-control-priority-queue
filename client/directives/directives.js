angular.module('airport.directives', [])
  .directive('ngQueue', [function() {
    return {
      restrict: 'EA',
      link: function(scope, elem, attrs) {
        var ac = attrs.type + attrs.size;
        var elem = elem;
        scope.$watch('head', function(newVal, oldVal, scope) {
          if (newVal) {
            while (elem[0].firstChild) {
              elem[0].removeChild(elem[0].firstChild);
            }
            var node = scope.head[ac];
            while (node) {
              var img = document.createElement('img');
              img.src = 'images/img100px/' + ac + '.png';
              elem[0].appendChild(img);
              node = node.next;
            }
          }
        }, true);
      }
    }
  }])
  .directive('ngArrival', [function() {
    return {
      restrict: 'EA',
      link: function(scope, elem, attrs) {
        scope.$watch('arrival', function(newVal, oldVal, scope) {
          if (newVal) {
            if (typeof scope.arrival === 'object') {
              var ac = scope.arrival.type + scope.arrival.size;
              var img = document.createElement('img');
              img.src = 'images/img100px/' + ac + '.png';
              if (elem[0].firstChild) {
                elem[0].removeChild(elem[0].firstChild);
              }
              elem[0].appendChild(img);
            }
            if (scope.arrival === 1) {
              if (elem[0].firstChild) {
                elem[0].removeChild(elem[0].firstChild);
              }
            }
          }
        });
      }
    }
  }]);