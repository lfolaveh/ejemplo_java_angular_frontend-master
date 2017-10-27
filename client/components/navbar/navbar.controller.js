'use strict';

class NavbarController {
    //start-non-standard
    menu = [{
            'title': 'Inicio',
            'state': 'main',
        },
        {
            'title': 'Usuarios',
            'state': 'usuarios',
        },
        {
            'title': 'Crear Usuario',
            'state': 'usuariosCreate',
        },
        {
            'title': 'Upload Imagen',
            'state': 'uploadFile',
        }
    ];

    isCollapsed = true;
    //end-non-standard


}

angular.module('frontendEjemploJavaAngularApp')
    .controller('NavbarController', NavbarController);