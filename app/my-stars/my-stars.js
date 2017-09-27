const app = angular.module('my-stars', []);

app.directive('myStars', function () {
    return {
        controller: function MyStarsCtrl() {
            'ngInject';
            console.log('MyStarsCtrl', arguments);
        },
        compile: function () {
            console.log('myStars compile', arguments);
            return {
                pre: function () {
                    console.log('myStars prelink', arguments);
                },
                post: function () {
                    console.log('myStars postlink', arguments);
                }
            }
        },

    };
});




