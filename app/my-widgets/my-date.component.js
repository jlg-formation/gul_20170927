(function () {
    'use strict';

    var app = angular.module('my-widgets');

    app.component('myDate', {
        controller: function MyDateCtrl() {
            console.log('MyAppCtrl', this);
            this.date = new Date();
        },
        template: `<p>{{$ctrl.date | date : 'medium'}}</p>`
    });
})();


