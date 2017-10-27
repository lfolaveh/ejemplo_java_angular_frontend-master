'use strict';

tiposDocumentosService.$inject = ['$resource', 'BASE_URL'];

function tiposDocumentosService($resource, BASE_URL) {

    return $resource(BASE_URL + '/tipos_documentos/:id', {
        id: '@id'
    }, {});
}

angular.module('frontendEjemploJavaAngularApp')
    .service('TiposDocumentosService', tiposDocumentosService);