//second param of dependencies is required to define the ng-app
var myApp = angular.module("myApp", []);

myApp.config(function($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "app.html",
        controller: "AppCtrl"
    })
})

//Define the  controller 
//$q is a promise library
myApp.controller("AppCtrl", function ($scope, $q) {
    $scope.model = {
        message: "This is my app";
    } ;


    var defer = $q.defer();

    //you make promises on the defer object
    //and chain them
    defer.promise.then(function(weapon) {
        console.log(weapon);
        return "bow";
    })
    .then(function(w) {
        console.log(w);
        return "arrow";
    })
    .then(function(w) {
        console.log(w);
    });

    //the defer is later resolved 
    defer.resolve("axe");
});

