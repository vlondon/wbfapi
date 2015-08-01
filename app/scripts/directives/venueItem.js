'use strict';
angular.module('testApp')
  .directive('venueItem', function ($compile) {
    var venueItem =
      '<div class="venue-item">' +
      '<span class="title">{{content.name}}</span>' +
      '<span class="rating" ng-show="content.rating > 0"> ({{content.rating}})</span>' +
      '<div class="checkins">Checkins: {{content.stats.checkinsCount}}</div>' +
      '</div>';

    var linker = function (scope, element) {
      element.html(venueItem).show();

      $compile(element.contents())(scope);
    };

    return {
      restrict: "E",
      link: linker,
      scope: {
        content: '='
      }
    };
  });
