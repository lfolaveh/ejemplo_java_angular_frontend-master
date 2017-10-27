'use strict';

(function() {

    class MainController {

        constructor($q, $state, Upload, BASE_URL) {
            this.$q = $q;
            this.$state = $state;
            this.Upload = Upload;
            this.BASE_URL = BASE_URL;
        }

        $onInit() {

        }

        create(from) {
            this.Upload.upload({
                url: this.BASE_URL + '/upload',
                data: { file: this.file }
            }).then(function(resp) {
                console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
                console.log('OK');
            }, function(resp) {
                console.log('Error status: ' + resp.status);
            }, function(evt) {
                var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
            });
        }

    }

    angular.module('frontendEjemploJavaAngularApp')
        .component('uploadFile', {
            templateUrl: 'app/upload-file/upload-file/upload-file.html',
            controller: MainController,
            controllerAs: 'vm'
        });

})();