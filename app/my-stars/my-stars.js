const app = angular.module('my-stars', []);

app.directive('myStars', function() {
    return {
        controller: function MyStarsCtrl() {
            'ngInject';
            console.log('MyStarsCtrl', arguments);
        }
    };
});




