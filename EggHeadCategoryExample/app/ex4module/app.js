/**
 * Created by patdass1 on 1/10/2015.
 */
var app = angular.module('ex4Module', ['ui.router']);

/*
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {
        controller: 'AppCtrl',
        templateUrl: 'app/ex4module/partials/View1.html'
    }).when('/view2', {
        controller: 'AppCtrl1',
        templateUrl: 'app/ex4module/partials1/View1.html'
    }).when('/', {
        controller: 'LoginCtrl',
        templateUrl: 'app/ex4module/partialsLogin/View1.html'
    }).otherwise({redirectTo: '/'});
}]);
*/
app.config(['$stateProvider', function($stateProvider) {
    $stateProvider.state('view1', {
        url: '#/view1',
        controller: 'AppCtrl',
        templateUrl: 'app/ex4module/partials/View1.html'
    }).state('view2', {
        url: '#/view2',
        controller: 'AppCtrl1',
        templateUrl: 'app/ex4module/partials1/View1.html'
    }).state('login', {
        url: '#/',
        controller: 'LoginCtrl',
        templateUrl: 'app/ex4module/partialsLogin/View1.html'
    });
}]);
