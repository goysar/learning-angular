(function(){
  var eduApp=angular.module('eduApp', ["ngRoute"])
  .config(function($routeProvider){
    $routeProvider
    .when('/', {templateUrl:'/libs/views/home.html', controller:'homeController'})
    .when('/home', {templateUrl:'/libs/views/home.html', controller:'homeController'})
    .when('/courses', {templateUrl:'/libs/views/courses.html', controller:'courseController'})
    .when('/courses/:id', {templateUrl:'/libs/views/coursedetail.html', controller:'coursedetailController'})
    .when('/employees', {templateUrl:'/libs/views/employees.html', controller:''})
    .when('/test', {templateUrl:'/libs/views/test.html', controller:'testController'})
    .otherwise({redirectTo:'/'})
  })
})()
