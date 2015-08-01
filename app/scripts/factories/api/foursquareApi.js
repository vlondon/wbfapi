'use strict';
angular.module('testApp')
  .factory('foursquareApi', function ($http, $q) {

    var apiConfig = {
      domain: 'https://api.foursquare.com/v2',
      baseParams: function() {
        return {
          client_id: 'L1VH4GBLNWJO5GC51EGLYXGVQQFCL1P322GNELHE5AORKLKD',
          client_secret: 'PJAIAIK5W4YMBB5M24FNG2JJMR50NR3TASEQA13VYIPTLWMD',
          v: 20140806,
          m: 'foursquare'
        }
      }
    };

    var foursquareApi = {};


    // --- VENUES ---
    foursquareApi.venues = (function () {
      var promise;

      var venues = {};

      venues.searchVenue = function (nearLocation, searchQuery) {
        var deferred = $q.defer();

        var getParams = apiConfig.baseParams();
        getParams.near = nearLocation;

        var searchType = 'explore';

        if (searchQuery) {
          getParams.query = searchQuery;
          searchType = 'search';
        }

        promise = promise || $http.get(apiConfig.domain + '/venues/' + searchType, { params: getParams });
        promise
          .success(function (data) {
            console.log('CALL SUCCEED: ', data);
            if (data.response) {
              deferred.resolve(data.response);
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
