/**
 * Created by patdass1 on 1/11/2015.
 */

var app = angular.module("ex5Module", []);


/*
app.directive("dumbPassword", function() {
    var validElement = angular.element("<div>{{model.input}}</div>");

    var link = function(scope) {
        scope.$watch("model.input", function(value) {
            if (value === "password") {
                validElement.toggleClass("alert-box alert")
            }
        })
    };

    return {
        restrict: "E",
        replace: true,
        template: "<div>\n  <input type=\"text\" ng-model=\"model.input\">\n  \n  \n<div>",
        compile: function(tElem) {
            tElem.append(validElement);

            return link;
        }
    }
});
*/
