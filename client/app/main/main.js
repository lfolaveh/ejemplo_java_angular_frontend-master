'use strict';

angular.module('frontendEjemploJavaAngularApp')
  .config(function($stateProvider) {
    $stateProvider.state('main', {
      url: '/',
      template: '<main></main>'
    });
  });
