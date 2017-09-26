(function () {
    'use strict';

    var app = angular.module('my-layout');

    app.component('myHeader', {
        controller: function MyHeaderCtrl() {
            console.log('MyHeaderCtrl', this);
        },
        templateUrl: 'my-layout/tmpl/my-header.component.html'
    });
})();


