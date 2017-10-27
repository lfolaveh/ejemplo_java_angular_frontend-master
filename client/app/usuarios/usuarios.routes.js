(function() {
    'use strict';

    config.$inject = ['$stateProvider'];

    function config($stateProvider) {
        $stateProvider
            .state('usuarios', {
                url: '/usuarios',
                template: '<usuarios-list></usuarios-list>',
            })
            .state('usuariosCreate', {
                url: '/usuarios/create',
                template: '<usuarios-create></usuarios-create>',
            });
    }

    angular
        .module('frontendEjemploJavaAngularApp')
        .config(config);
})();