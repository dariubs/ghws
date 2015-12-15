angular
  .module('app',['ngRoute'])
    .config(function($routeProvider, $locationProvider){
      $locationProvider.html5Mode(true);

      $routeProvider
        .when('/',{
          templateUrl: 'hi.html',
          controller: 'Td'
        })
        .when('/:name',{
          templateUrl: 'hi.html',
          controller: 'TC'
        });
    })
    .controller('Td',function($scope, $routeParams){
      $scope.name = 'dariush';
    })
    .controller('TC',function($scope, $routeParams){
      $scope.name = $routeParams.name;
    });
