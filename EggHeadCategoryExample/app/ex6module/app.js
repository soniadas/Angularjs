/**
 * Created by patdass1 on 1/11/2015.
 */

var app = angular.module("ex6Module",
    ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/map/:state/:city', {
            template: '<h1>{{data.msg}}</h1>',
            controller: 'Ctrl',
            resolve: {
                resol: function ($q, $timeout) {
                    var defer = $q.defer();

                    $timeout(function () {
                        defer.resolve();
                    }, 5000);

                    return defer.promise;
                }
            }
        })
        .when('/', {
            template: '<h1>{{data.msg1}}</h1>',
            controller: 'Ctrl1'
        })
        .otherwise({redirectTo: '/map/s/s'});
}]);

app.controller('Ctrl', function($scope, $routeParams, $q) {

   // var defer = $q.defer();

    /*defer.promise
        .then(function (para) {
            alert('sonia das'+ para);
            return 'sowrd';
        }).then(function (weapon) {
            alert('rajib moadal' + weapon);
            return 'axe';
        }).then(function (weap) {
            alert('tanis das' + weap);
        })
*/
//    defer.resolve('weapon');
    $scope.data = {
        msg : 'Address : ' + $routeParams.state + ": " + $routeParams.city
    };
});


app.controller('Ctrl1', function($scope, $routeParams) {
    $scope.data = {
        msg1: 'sonia'
    };
});


