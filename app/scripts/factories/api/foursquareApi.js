'use strict';
angular.module('testApp')
  .factory('foursquareApi', function ($http, $q) {

    var apiDomain = 'https://api.foursquare.com/v2';

    var foursquareApi = {};

    // --- VENUES ---
    foursquareApi.venues = (function () {
      var promise;
      var deferred = $q.defer();

      var venues = {};

      venues.getVenue = function (searchQuery) {
        var getParams = {
          client_id: 'L1VH4GBLNWJO5GC51EGLYXGVQQFCL1P322GNELHE5AORKLKD',
          client_secret: 'PJAIAIK5W4YMBB5M24FNG2JJMR50NR3TASEQA13VYIPTLWMD',
          v: 20140806,
          m: 'foursquare',
          near: 'London',
          query: searchQuery
        };
        promise = promise || $http.get(apiDomain + '/venues/search', {params: getParams});
        promise
          .success(function (data) {
            if (data.response && data.response.venues) {
              var allFoursqareVenues = data.response.venues;
              deferred.resolve(allFoursqareVenues);
            } else {
              deferred.reject();
            }
          })
          .error(deferred.reject)
          .finally(function () {
            promise = undefined;
          });
        return deferred.promise;
      };

      return venues;
    }());

    return foursquareApi;
  });
