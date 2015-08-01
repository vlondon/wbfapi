'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testApp
 */
angular.module('testApp')
  .controller('MainCtrl', function ($scope, foursquareApi) {

    $scope.loading = false;
    $scope.venues = [];
    $scope.groups = [];
    $scope.error = undefined;

    var that = this;

    that.searchVenue = function () {
      var searchLocation = $scope.searchForm.location.$viewValue;
      var searchQuery = $scope.searchForm.query.$viewValue;

      // Reset results
      $scope.venues = [];
      $scope.groups = [];
      $scope.error = undefined;

      // Show loading
      $scope.loading = true;

      foursquareApi.venues.searchVenue(searchLocation, searchQuery)
        .then(function (data) {
          // Request succeed: Display results
          $scope.loading = false;
          console.log('SUCCEED data: ', data);

          if (data.venues && data.venues.length > 0) {
            console.log('Show search results: ', data.venues);
            $scope.venues = data.venues;
          } else if (data.groups && data.groups.length > 0) {
            $scope.groups = data.groups;
            data.groups.forEach(function (group) {
              console.log('Show group: ', group.name, group.items);
            });
          } else {
            // No result
          }
        })
        .catch(function(data){
          // Request failed: Display error message
          $scope.loading = false;
          console.log('FAILED data: ', data);

          var error = {
            type: 0,
            message: 'Search failed. Please try again.'
          };

          var errorReason = 'Unknown';
          if (data.meta && data.meta.errorDetail) {
            errorReason = data.meta.errorDetail;
          }
          error.message += ' ( Reason: ' + errorReason + ' )';

          $scope.error = error;
        });
    };


    $scope.searchFormSubmit = function () {
      if ($scope.searchForm.$valid) {

        that.searchVenue();

        return true;
      } else {
        return false;
      }
    };

  });
