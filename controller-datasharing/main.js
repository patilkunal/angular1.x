//second param of dependencies is required to define the ng-app
var myApp = angular.module("myApp", []);

//This will hold our all the controllers
var mycontrollers = {};
myApp.controller(mycontrollers);

//Controller to controller data sharing is implemented by having this factory

myApp.factory('Data', function() {
    return {message: 'This is from factory'};
});

//Define the first controller 
//inject Data service in controller and bind to data prop
mycontrollers.FirstCtrl = function ($scope, Data) {
    $scope.data = Data;
}

//define the second controller
mycontrollers.SecondController = function($scope, Data) {
    $scope.data = Data;
}
