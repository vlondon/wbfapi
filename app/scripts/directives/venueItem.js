'use strict';
angular.module('testApp')
  .directive('venueItem', function ($compile) {
    var venueItem =
      '<div class="venue-item">' +
      '<div class="item-info">' +
      '<span class="title">{{content.name}}</span>' +
      '<div class="rating" ng-show="content.rating > 0">Rating: <span class="rating-stars">{{content.rating}}</span> based on {{content.ratingSignals}} users</div>' +
      '<div class="checkins">Checkins: {{content.stats.checkinsCount}}</div>' +
      '</div>' +
      '<a class="map" href="http://maps.google.com/?q={{content.location.lat}},{{content.location.lng}}" target="_blank">' +
      '<img src="http://maps.googleapis.com/maps/api/staticmap?center={{content.location.lat}},{{content.location.lng}}&zoom=15&size=320x320&sensor=false">' +
      '</a>' +
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
