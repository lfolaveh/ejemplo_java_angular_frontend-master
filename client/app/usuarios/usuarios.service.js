'use strict';

usuariosService.$inject = ['$resource', 'BASE_URL'];

function usuariosService($resource, BASE_URL) {

    return $resource(BASE_URL + '/usuarios/:id', {
        id: '@id'
    }, {

        count: {
            url: BASE_URL + '/usuarios/count',
            method: 'GET'
        },

        generarExcel: {
            url: BASE_URL + '/usuarios/excel',
            method: 'GET',
            responseType: 'arraybuffer',
            transformResponse: function(data) {
                return {
                    data: data
                };
            }
        }
    });
}

angular.module('frontendEjemploJavaAngularApp')
    .service('UsuariosService', usuariosService);