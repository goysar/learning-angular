(function(){
  angular.module('eduApp')
  .directive('serverBusy', function(){
    return {
      restrict:"E",
      replace:true,
      templateUrl:'/libs/templates/serverBusy.html',
      scope:{
        show:'='
      },
      controller:function($scope){

      },
      link:function(scope,elem, attrs){}
    }
  })
  .directive('infoPanel', function(){
    return{
      restrict:"E",
      replace:false,
      scope:{
        title:'='
      },
      templateUrl:'/libs/templates/infoPanel.html',
      controller:function($scope){
        $scope.collapse = false;
        $scope.toggleCollapse = function(){
          $scope.collapse = !$scope.collapse;
        }
      },
      transclude:true,
    }
  })
  .directive('testMe', function(){
    return {
      restrict:"E",
      replace:false,
      template:'<input type="text" ng-model="userInfo.login"/>',
      scope:true,
      controller:function($scope){
        $scope.userInfo.login="this is from the directive"
      }
    }
  })
  .directive('levelOne', function(){
    return {
      restrict:"E",
      replace:false,
      scope:{},
      template:"<div ng-transclude></div>",
      transclude:true,
      controller:function($scope){
        console.log('controller-level-one');
      },
      compile:function(tElem, tAttrs){
        console.log('compile-level-one')
        return {
          pre:function(scope, elem, attrs){
            console.log('pre-level-one')
          },
          post:function(scope, elem, attrs){
            console.log('post-level-one')
          }
        }
      }
    }
  })
  .directive('levelTwo', function(){
    return {
      restrict:"E",
      replace:false,
      scope:{},
      template:"<div ng-transclude></div>",
      transclude:true,
      controller:function($scope){
        console.log('controller-level-two');
      },
      compile:function(tElem, tAttrs){
        console.log('compile-level-two')
        return {
          pre:function(scope, elem, attrs){
            console.log('pre-level-two')
          },
          post:function(scope, elem, attrs){
            console.log('post-level-two')
          }
        }
      }
    }
  })
  .directive('levelThree', function(){
    return {
      restrict:"E",
      replace:false,
      scope:{},
      template:"<div></div>",

      controller:function($scope){
        console.log('controller-level-three');
      },
      compile:function(tElem, tAttrs){
        console.log('compile-level-three')
        return {
          pre:function(scope, elem, attrs){
            console.log('pre-level-three')
          },
          post:function(scope, elem, attrs){
            console.log('post-level-three')
          }
        }
      }
    }
  })
})() //IIFE
