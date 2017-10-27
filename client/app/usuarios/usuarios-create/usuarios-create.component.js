'use strict';

(function() {

    class MainController {

        constructor($q, $state, UsuariosService,
            TiposDocumentosService, FileSaver) {
            this.$q = $q;
            this.$state = $state;
            this.UsuariosService = UsuariosService;
            this.TiposDocumentosService = TiposDocumentosService;
            this.sexo = [];
            this.selected = {};
        }

        $onInit() {
            this.getAllTiposDocumentos();
            this.getSexo();
        }

        getSexo() {
            this.sexo = [
                { id: 'F', nombre: 'Femenino' },
                { id: 'M', nombre: 'Masculino' }
            ]
        }

        create() {
            this.UsuariosService
                .save(this.selected)
                .$promise
                .then(data => {
                    console.log('OK');
                    this.$state.go('usuarios');
                })
                .catch(error => {
                    console.log('ERROR ', error);
                });
        }

        getAllTiposDocumentos() {
            this.TiposDocumentosService
                .query()
                .$promise
                .then(data => {
                    this.tiposDocumentosList = data;
                })
                .catch(error => {
                    console.log('ERROR ', error);
                });
        }



    }

    angular.module('frontendEjemploJavaAngularApp')
        .component('usuariosCreate', {
            templateUrl: 'app/usuarios/usuarios-create/usuarios-create.html',
            controller: MainController,
            controllerAs: 'vm'
        });

})();