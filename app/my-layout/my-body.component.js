(function () {
    'use strict';

    var app = angular.module('my-layout');

    app.component('myBody', {
        controller: function MyBodyCtrl() {
            console.log('MyBodyCtrl', this);
            this.name = 'Maïté';
        },
        templateUrl: 'my-layout/tmpl/my-body.component.html'
    });
})();


