/**
 * Created by patdass1 on 1/10/2015.
 */
var app = angular.module('ex4Module');

app.controller('MainCtrl', ['$scope', '$state' , function ($scope, $location) {

    function logout () {
        $scope.$parent.showMenu = false;
        //$rootScope.showMenu = false;
        $state.go('login');
    };
    $scope.logout = logout;
}]);