app.factory('BobbyFactory', ['$location', '$http', function($location,$http){
  var factory = {};
  factory.register = function(user){
    $http({
      url: '/register',
      method: 'POST',
      data: user
    }).then(function(res){
      console.log(res);
      $location.url('/dashboard')
    })
  }
  factory.currentUser = function(callback){
    $http({
      url: '/current',
      method: "GET"
    }).then(function(res){
        callback(res.data);
    }, function(res){
        // console.log(res  );
        $location.url('/')
    })
  }
  factory.login = function(user){
  $http({
      url: '/login',
      method: 'POST',
      data: user
    }).then(function(res){
      console.log(res);
      $location.url('/dashboard')
    }, function(res){
      console.log(res);
    })
  }
  factory.getUsers = function(callback){
    $http({
      url: '/users',
      method: 'GET'
    }).then(function(res){
      console.log(res);
      callback(res.data);
    }, function(res){
      console.log(res);
    })
  }
  factory.createBucket = function(bucket){
    $http({
      url: '/bucket',
      method: 'POST',
      data: bucket
    }).then(function(res){
      console.log(res);
      $location.url('/dashboard');
    }, function(res){
      console.log(res);
    })
  }
  factory.getBuckets = function(callback){
    $http({
      url: '/buckets',
      method: 'GET',
    }).then(function(res){
      console.log(res);
      callback(res.data);
    }, function(res){
      console.log(res);
    })
  }
  return factory;
}])
