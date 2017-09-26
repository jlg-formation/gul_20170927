(function () {
    'use strict';

    var app = angular.module('main');

    app.component('myApp', {
        controller: function MyAppCtrl() {
            console.log('MyAppCtrl', this);
        },
        templateUrl: 'main/my-app.component.html'
    });
})();


