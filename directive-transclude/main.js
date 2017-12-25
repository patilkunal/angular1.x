//second param of dependencies is required to define the ng-app
var myApp = angular.module("myApp", []);


//Define the  controller 
myApp.controller("AppCtrl", function ($scope) {
    
});

//this demonstrates how to include the content defined between a directive
//the button defined gets appended in the content on which ng-transclude is declared
myApp.directive("mypanel", function() {
    return {
        restrict: "A",
        transclude: true,
        template: '<div class="card" ng-transclude><div class="">This is a panel component</div></div>'
    }
});
