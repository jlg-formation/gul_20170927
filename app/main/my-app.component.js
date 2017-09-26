(function () {
    'use strict';

    var app = angular.module('main');

    app.component('myApp', {
        controller: function MyAppCtrl() {
            console.log('MyAppCtrl', this);
            this.name = 'Maïté';
        },
        template: '<h1>Hello {{$ctrl.name}}</h1>'
    });
})();


