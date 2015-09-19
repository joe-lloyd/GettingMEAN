var app = angular.module("myApp",   [
     'ui.bootstrap',
     'ngAnimate',
     'myAppRouter',
     'myAppHomeCtrl',
     'myAppHomeService',
     'myAppNavbarDirective',
     'myAppNavbarService',
     'myAppLoginCtrl',
     'myAppLoginService'
     ]);

//This config is used to remove the # in the html
app.config(["$locationProvider", function($locationProvider) {
   $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
   });
}]);