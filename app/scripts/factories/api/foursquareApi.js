'use strict';
angular.module('testApp')
  .factory('foursquareApi', function ($http, $q) {

    var apiConfig = {
      domain: 'https://api.foursquare.com/v2',
      baseParams: {
        client_id: 'L1VH4GBLNWJO5GC51EGLYXGVQQFCL1P322GNELHE5AORKLKD',
        client_secret: 'PJAIAIK5W4YMBB5M24FNG2JJMR50NR3TASEQA13VYIPTLWMD',
        v: 20140806,
        m: 'foursquare'
      }
    };

    var foursquareApi = {};


    // --- VENUES ---
    foursquareApi.venues = (function () {
      var promise,
        deferred = $q.defer();

      var venues = {};

      venues.searchVenue = function (nearLocation, searchQuery) {

        var getParams = apiConfig.baseParams;
        getParams.near = nearLocation;

        var searchType = 'explore';

        if (searchQuery) {
          getParams.query = searchQuery;
          searchType = 'search';
        }

        promise = promise || $http.get(apiConfig.domain + '/venues/' + searchType, { params: getParams });
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
