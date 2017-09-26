(function () {
    'use strict';

    var app = angular.module('my-layout');

    app.component('myFooter', {
        controller: function MyFooterCtrl() {
            console.log('MyFooterCtrl', this);
        },
        templateUrl: 'my-layout/tmpl/my-footer.component.html'
    });
})();


