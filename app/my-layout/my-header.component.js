(function () {
    'use strict';

    var app = angular.module('my-layout');

    app.component('myHeader', {
        controller: function MyHeaderCtrl() {
            console.log('MyHeaderCtrl', this);
        },
        templateUrl: 'my-layout/my-header.component.html'
    });
})();


