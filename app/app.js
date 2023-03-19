/***********************************************************
* Developer: Dev Chandel       *
* Website: https://goojdex.github.io        *
* License: MIT License                                     *
***********************************************************/

var siteHeaderText = {};

var GDdownGit = angular.module('GDdownGit', [
    'ngRoute',
    'homeModule',
    'toastr',
]);

GDdownGit.config([
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

GDdownGit.config([
    'toastrConfig',
    
    function(toastrConfig) {
        angular.extend(toastrConfig, {
            positionClass: 'toast-bottom-right',
            maxOpened: 3,
        });
    }
]);
