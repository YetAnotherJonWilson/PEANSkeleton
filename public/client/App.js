angular.module('myApp', [])

.config(['$locationProvider', function($locationProvider) {
    $locationProvider.html5Mode(true);
}])

.controller('MainController', function() {
    var vm =this;

    vm.message = "Hello Planet";
});