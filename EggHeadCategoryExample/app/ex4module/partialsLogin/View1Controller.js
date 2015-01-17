var app = angular.module('ex4Module');

app.controller('LoginCtrl',['$scope', '$state', function ($scope, $location) {
    $scope.data = {
        user: '',
        password: ''
    };
    function login(data) {
        $scope.data = angular.copy(data);
        if($scope.data.password === 's') {
            console.log('sonia');
            $scope.$parent.showMenu = true;
            $state.go('view1');
        } else {
            reset();
        }
    };

    $scope.login = login;

    function reset () {
        $scope.data = {
            user: '',
            password: ''
        };
    }
}]);
