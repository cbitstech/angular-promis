/* Urology Survey - app.js */
// Contains the main configuration for the Urology Survey
// Tony Andrys

angular.module('urologySurvey', ['ionic', 'urologySurvey.controllers', 'urologySurvey.services','angularLocalStorage'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

// Navigation bar/state configuration
.config(function($stateProvider, $urlRouterProvider) {
  'use strict';


  // CAT Assessment
  $stateProvider
    .state('cat-assessment', {
      url: '/cat-assessment',
      templateUrl: 'templates/cat-assessment.html',
      controller: 'CATAssessmentCtrl'
    });
    
    
  $stateProvider
    .state('finished-survey', {
      url: '/finished-survey',
      templateUrl: 'templates/finished-survey.html',
      controller: 'FinishedCtrl'
    });

  // Fallback route if we can't match any filenames to a valid template
  $urlRouterProvider.otherwise('/cat-assessment');

});
