'use strict';

angular.module('frontendEjemploJavaAngularApp', [
        'frontendEjemploJavaAngularApp.constants',
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ui.router',
        'ui.bootstrap',
        'ngMaterial',
        'md.data.table',
        'ngFileSaver',
        'ngFileUpload'
    ])
    .constant('BASE_URL', 'http://localhost:8080/ejemplo_java_angular_backend-master/api')
    .config(function($urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/');

        $locationProvider.html5Mode(true);
    });