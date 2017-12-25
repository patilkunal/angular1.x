//second param of dependencies is required to define the ng-app
var myApp = angular.module("myApp", []);


//Define the  controller 
myApp.controller("AppCtrl", function ($scope) {
    
});

//this demonstrates how to manipulate DOM element in angular
//Crude way would be addressing it in element.children[x] fashion (element is second arg to link function)
//a better way would be to create the element upfront, so you can address it using variable
//and then append the element at compile time to the template DOM element
myApp.directive("dumbpassword", function() {
    var myElement = angular.element("<div>{{model.input}}</div>")
    return {
        restrict: "E",
        scope: {},
        replace: true, 
        template: '<div><input type="text" ng-model="model.input"></div>',
        compile: function(telem) {
            telem.append(myElement);
            //compile function returns link function
            return function(scope, element) {
                //link function get the isolated scope and element as args
                scope.$watch("model.input", function(val){
                    if(val == "password") {
                        myElement.toggleClass("alert alert-box");
                    }
                })
            }
        }
    }
});
