const app = angular.module('my-stars', []);

app.directive('myStars', function () {
    return {
        restrict: 'E',
        scope: {
            note: '='
        },
//         template: `
// <img ng-src="{{$ctrl.getImage(0)}}">
// <img ng-src="{{$ctrl.getImage(1)}}">
// <img ng-src="{{$ctrl.getImage(2)}}">
// <img ng-src="{{$ctrl.getImage(3)}}">
// <img ng-src="{{$ctrl.getImage(4)}}">
//         `,
        controller: function MyStarsCtrl($scope, $element, $attrs) {
            'ngInject';
            console.log('MyStarsCtrl', arguments);
            console.log('$scope.note', $scope.note);

            let html= '';
            let note = $scope.note || 0;
            for (let i = 0; i < note; i++) {
                html += '<img src="my-stars/img/yellow_star.png">';      
            }
            for (let i = note; i < 5; i++) {
                html += '<img src="my-stars/img/white_star.png">';      
            }
            $element.html(html);
        },
        controllerAs: '$ctrl',
        // compile: function (tElement, tAttrs, transclude) {
        //     console.log('myStars compile', arguments);
        //     return {
        //         pre: function () {
        //             console.log('myStars prelink', arguments);
        //         },
        //         post: function () {
        //             console.log('myStars postlink', arguments);
        //         }
        //     }
        // },

    };
});




