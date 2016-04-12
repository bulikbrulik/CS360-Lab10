angular.module('clusterApp', [])
.controller('MainCtrl', [
'$scope', '$http',
function($scope, $http){
  $scope.cluster = [];
  $scope.getPIDs = function() {
    $scope.cluster = [];
  }
  
  $scope.getMyPIDs = function() {
      $http.get('/pid').success(function(data){
        console.log("getAll");
        console.log(data);
        $scope.cluster.push(data);
      });
  }

  $scope.getfivePIDs = function() {
     for(i = 0; i < 100; i++){
        $http.get('/pid').success(function(data){
        console.log("getAll");
        console.log(data);
        $scope.cluster.push(data);
      });
	
    }
  }

} 
]);      