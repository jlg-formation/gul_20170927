(function () {
    'use strict';

    var app = angular.module('main');

    app.component('myApp', {
        controller: function MyAppCtrl() {
            console.log('MyAppCtrl', this);
            this.name = 'Maïté';
        },
        templateUrl: 'main/my-app.component.html'
    });
})();


