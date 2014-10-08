'use strict';

angular.module('fullstackApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('myroute', {
        url: '/myroute',
        templateUrl: 'app/myroute/myroute.html',
        controller: 'MyrouteCtrl'
      });
  });