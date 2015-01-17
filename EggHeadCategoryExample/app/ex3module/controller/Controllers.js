/**
 * Created by patdass1 on 1/10/2015.
 */
var app = angular.module('ex3Module');

app.run(function($templateCache) {
    $templateCache.put('zippy.html', '<div><h1 ng-click="toggleContent()">{{title}}</h1><div ng-show="isContentVisisble" ng-transclude></div></div>');

});


app.config(function() {
    console.log("config");
});


app.controller('FirstCtrl', function($scope) {
});

app.controller('SecondCtrl', function($scope) {
});


app.controller('FirstCtrl1', function ($scope) {

});

app.directive('zippy', function ($templateCache) {

    console.log($templateCache.get('zippy.html'));
    var obj = {
        restrict: 'E',
        transclude: true,
        scope: {
            title: '@'
        },
        templateUrl: 'zippy.html',
        link: function (scope) {
           // scope.isContentVisisble = false;

            scope.toggleContent = function () {
                console.log('sonia das');
                scope.isContentVisisble = !scope.isContentVisisble;
            }
        }
    };

    return obj;
});