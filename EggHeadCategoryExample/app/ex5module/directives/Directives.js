/**
 * Created by patdass1 on 1/11/2015.
 */
var app = angular.module("ex5Module");

app.directive('zip', function () {
    var validElement =  angular.element("<div>{{data.name}}</div>");

    var link = function (scope) {
        debugger;
        scope.$watch("data.name", function (value) {
            if (value === 'password') {
                validElement.addClass("red");
            } else {
                validElement.removeClass("red");
            }
        });
    };

    var obj = {
        restrict: 'E',
        replace: true,
        template: '<div><input type="text" ng-model="data.name"></div>',
        compile: function (element) {
            element.append(validElement);

            return link;
        }

    };

    return obj;
});

