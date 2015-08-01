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

    var that = this;

    that.searchVenue = function() {
      var searchLocation = $scope.searchForm.location.$viewValue;
      var searchQuery = $scope.searchForm.query.$viewValue;

      // Reset results
      $scope.venues = [];
      $scope.groups = [];

      // Show loading
      $scope.loading = true;

      foursquareApi.venues.searchVenue(searchLocation, searchQuery).then(function (data) {
        $scope.loading = false;
        console.log('data: ', data);

        if(data.venues) {
          console.log('Show search results: ', data.venues);
          $scope.venues = data.venues;
        } else if (data.groups && data.groups.length > 0) {
          $scope.groups = data.groups;
          data.groups.forEach( function(group) {
            console.log('Show group: ', group.name, group.items);
          });
        }
        if(!$scope.$$phase) {
          $scope.$digest();
        }

      });
    };


    $scope.searchFormSubmit = function() {
      if ($scope.searchForm.$valid) {

        that.searchVenue();

        return true;
      } else {
        return false;
      }
    };

  });
