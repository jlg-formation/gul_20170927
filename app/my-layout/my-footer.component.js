(function () {
    'use strict';

    var app = angular.module('my-layout');

    app.component('myFooter', {
        controller: function MyFooterCtrl() {
            console.log('MyFooterCtrl', this);
        },
        templateUrl: 'my-layout/my-footer.component.html'
    });
})();


