app.controller('DashboardController',['$scope','$routeParams','$location','BobbyFactory', function($scope,$routeParams,$location,BobbyFactory){
  function currentUser(){
    BobbyFactory.currentUser(function(data){
      $scope.user = data;
    })
  }
  currentUser();
  function getUsers(){
    BobbyFactory.getUsers(function(data){
      $scope.users = data;
    })
  }
  getUsers();

  $scope.createBucket = function(bucket){
    BobbyFactory.createBucket(bucket);
    $scope.newBucket = {}
  }
  function getBuckets(){
    BobbyFactory.getBuckets(function(data){
      $scope.buckets = data;
    })
  }
  getBuckets();
}])
