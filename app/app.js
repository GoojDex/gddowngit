/***********************************************************
* Developer: Dev Chandel       *
* Website: https://goojdex.github.io        *
* License: MIT License                                     *
***********************************************************/

var siteHeaderText = {};

var gddownGit = angular.module('gddownGit', [
    'ngRoute',
    'homeModule',
    'toastr',
]);

gddownGit.config([
    '$routeProvider',
    
    function($routeProvider) {
        $routeProvider
            .when('/', {
                redirectTo: '/home',
            })
            .otherwise({
                redirectTo: '/home',
            });
    }
]);

gddownGit.config([
    'toastrConfig',
    
    function(toastrConfig) {
        angular.extend(toastrConfig, {
            positionClass: 'toast-bottom-right',
            maxOpened: 3,
        });
    }
]);
