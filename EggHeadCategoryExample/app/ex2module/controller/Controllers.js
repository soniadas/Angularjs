/**
 * Created by patdass1 on 1/9/2015.
 */

var app = angular.module('example2Module');

app.factory('person', function () {
    var obj = {
        firstName: 'sonia',
        lastName: 'das'
    };
    return obj;
});
app.controller("MyCtrl", function($scope, person) {
    $scope.isToggle = true;
    $scope.person = person;

    function toggle () {
        $scope.isToggle = !$scope.isToggle;
        $scope.$destroy();
    }
    $scope.toggle = toggle;
});
