'use strict';

function uploadFileController() {
    this.message = 'World';
}

angular.module('frontendEjemploJavaAngularApp')
    .component('fotoUser', {
        template: '<h1>Hello {{ $ctrl.message }}</h1>',
        bindings: { message: '<' },
        controller: uploadFileController
    });