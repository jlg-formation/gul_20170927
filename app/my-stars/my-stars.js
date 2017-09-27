const app = angular.module('my-stars', []);

app.directive('myStars', function () {
    return {
        restrict: 'E',
        scope: {
            note: '<'
        },
        //         template: `
        // <img ng-src="{{$ctrl.getImage(0)}}">
        // <img ng-src="{{$ctrl.getImage(1)}}">
        // <img ng-src="{{$ctrl.getImage(2)}}">
        // <img ng-src="{{$ctrl.getImage(3)}}">
        // <img ng-src="{{$ctrl.getImage(4)}}">
        //         `,
        controller: function MyStarsCtrl($scope, $element, $attrs, $compile) {
            'ngInject';
            console.log('MyStarsCtrl', arguments);
            console.log('$scope.note', $scope.note);

            $scope.update = (newNote) => {
                console.log('newNote', newNote);
                $scope.note = newNote;
            };

            $scope.$watch('note', function () {
                let html = '';
                let note = $scope.note || 0;
                note = (note > 5) ? 5 : note;
                note = (note < 0) ? 0 : note;
                for (let i = 0; i < note; i++) {
                    html += '<img ng-click="update(' + (i + 1) + ')" src="my-stars/img/yellow_star.png">';
                }
                for (let i = note; i < 5; i++) {
                    html += `<img ng-click="update(${i + 1})" src="my-stars/img/white_star.png">`;
                }
                $element.html(html);
                $compile($element.contents())($scope);
            });


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




