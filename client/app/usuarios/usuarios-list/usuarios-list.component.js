'use strict';

(function() {

    class MainController {

        constructor($q, $state, UsuariosService,
            TiposDocumentosService, FileSaver) {
            this.$q = $q;
            this.$state = $state;
            this.UsuariosService = UsuariosService;
            this.TiposDocumentosService = TiposDocumentosService;
            this.usuariosList = [];
            this.tiposDocumentosList = [];
            this.sexo = [];
            this.nombres = [];
            this.selected = {};
            this.FileSaver = FileSaver;
            this.usuariosLength = 0;
            this.query = {};
        }

        $onInit() {
            this.query = {
                limit: 5,
                page: 1
            };
            this.getAllUsuarios();
            this.getAllTiposDocumentos();
            this.getSexo();
            this.getNombres();
        }

        getSexo() {
            this.sexo = [
                { id: 'F', nombre: 'Femenino' },
                { id: 'M', nombre: 'Masculino' }
            ]
        }

        getNombres() {
            this.nombres = this.usuariosList;
        }

        getAllUsuarios() {
            this.UsuariosService
                .count(this.selected)
                .$promise
                .then(data => {
                    console.log(this.selected);
                    this.usuariosLength = 0;
                    for (var i = 0; i < (Object.keys(data).length - 2); i++) {
                        this.usuariosLength += data[i];
                    }

                    if (this.selected) {
                        this.selected.desde = this.getPageFirstItem();
                        this.selected.hasta = this.getPageLastItem();
                    } else {
                        this.selected = {
                            desde: this.getPageFirstItem(),
                            hasta: this.getPageLastItem()
                        };
                    }

                    this.UsuariosService
                        .query(this.selected)
                        .$promise
                        .then(data => {
                            this.usuariosList = data;
                        });

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

        exportExcel() {
            this.UsuariosService
                .generarExcel(this.selected)
                .$promise.then(result => {
                    var blob = new Blob([result.data], {
                        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
                    });
                    this.FileSaver.saveAs(blob, 'Reporte_Usuarios.xlsx');
                });
        }

        /**
         * Limpia la consulta realizada
         */
        clearQuery() {
            this.usuariosLength = 0;
            this.selected = {};
            this.getAllUsuarios();

        }

        /**
         * Ejecuta la consulta por los criterios
         * Es función es usada desde el select Validado
         */
        selectedValidado() {
            this.getAllUsuarios();
        }


        getPageFirstItem() {
            return (this.query.page - 1) * this.query.limit;
        }

        getPageLastItem() {
            var i = this.getPageFirstItem() + this.query.limit - 1;
            var count = this.usuariosLength - 1;
            if (i > count) {
                i = count;
            }
            if (i < 0) {
                i = 0;
            }
            return i;
        }

        onPaginate(page, limit) {
            this.query.page = page;
            this.query.limit = limit;
            this.getAllUsuarios();
        }
    }

    angular.module('frontendEjemploJavaAngularApp')
        .component('usuariosList', {
            templateUrl: 'app/usuarios/usuarios-list/usuarios-list.html',
            controller: MainController,
            controllerAs: 'vm'
        });

})();