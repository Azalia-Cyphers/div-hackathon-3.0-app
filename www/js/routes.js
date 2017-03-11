angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('goodMorningKendrick', {
    url: '/page1',
    templateUrl: 'templates/goodMorningKendrick.html',
    controller: 'goodMorningKendrickCtrl'
  })

  .state('goodMorningKendrick2', {
    url: '/page3',
    templateUrl: 'templates/goodMorningKendrick2.html',
    controller: 'goodMorningKendrick2Ctrl'
  })

$urlRouterProvider.otherwise('/page1')

  

});