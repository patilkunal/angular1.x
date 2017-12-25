//second param of dependencies is required
var myApp = angular.module("choreApp", []);

myApp.controller('ChoreCtrl', function($scope) {
    $scope.logChore = function(chore) {
        alert(chore + " is done!");
    }
    $scope.ctrlFlavor = 'mango';
});

myApp.controller('AppCtrl', function($scope) {
    //notice the parameter how it is bound in directive
    //for this function call
    $scope.callPlace = function(where) {
        alert("Calling " + where);
    }
});

//bind outside function call to inside directive (like a callback func)
//notice the object like binding of the function parameters
myApp.directive('phone', function() {
    return {
        restrict: "E",
        scope: {
            dial: '&'
        },
        template: "<input type'text' ng-model='myplace'><br><button ng-click='dial({place: myplace})'>Dial {{myplace}}</button>"
    }
});

//without scope, all diretive instance share the same 'chore' object and data
//but this breaks the binding of chore object to enclosing controller
//So we make variable point to an expression using special '&'
//the parameter passing is done using special object syntax and property
//of the object is the parameter name in the function and value is the local object value

myApp.directive("kid", function() {
    return {
       restrict: "E",
       scope: {
           done: '&'
       },
       template: '<input type="text" ng-model="chore"> {{chore}}<br> <button class="button" ng-click="done({chore:chore})">Done</button>'
    }
});

//the link function links the directive instance and then you can
//access the specific element instance and all the attributes of the element
//so the flavor attribute can now be accessed and assigned to scope variable myflavor

//Seems like link function uses the last direction definition attribute value -- see it in action
myApp.directive("drink", function() {
    return {
        restrict: "E",
        template: "<div>{{myflavor}}</div><br>",
        link: function(scope, element, attrs) {
            scope.myflavor = attrs.flavor;
        }
    }
});

//alternatively we can use special '@' symbol to access attributes of the directive
//the '@' gives one way binding
myApp.directive("drink2", function() {
    return {
        restrict: "E",
        template: "<div>{{myflavor}}</div><br>",
        scope: {
            myflavor: '@flavor'
        }
    }
});


//The '=' sign also binds, but now the flavor attr expects the actual variable from the controller and 
// NOT the string value to be passed in
//the '=' gives two way binding
myApp.directive("drink3", function() {
    return {
        restrict: "E",
        template: "<input type='text' ng-model='myflavor'><br>",
        scope: {
            myflavor: '=flavor'
        }
    }
});
