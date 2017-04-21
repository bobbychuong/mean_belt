app.controller('IndexController',['$scope','$routeParams','$location','BobbyFactory', function($scope,$routeParams,$location,BobbyFactory){
  $scope.register = function(user){
      BobbyFactory.register(user);
    }
    $scope.login = function(user){
      BobbyFactory.login(user);
    }
}])
