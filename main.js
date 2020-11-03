var app = angular.module('show', []);

app.controller('name', function($scope, $rootScope) {


    console.log($scope);
    

    $scope.changeHome = function() {
        $rootScope.heading=$scope.$$watchers[1].last;
        $rootScope.img = $scope.$$watchers[2].last;
        console.log($scope.$$watchers[1].last);
    }
    
});