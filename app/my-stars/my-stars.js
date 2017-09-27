const app = angular.module('my-stars', []);

app.component('myStars', {
    bindings: {
        note: '=?'
    },
    controller: function MyStarsCtrl($scope, $element, $attrs, $compile) {
        'ngInject';
        console.log('MyStarsCtrl', arguments);

        this.$onInit = function () {
            console.log('ctrl.note', this.note);

        }

        $scope.update = (newNote) => {
            console.log('newNote', newNote);
            this.note = newNote;
        };

        $scope.$watch('$ctrl.note', () => {
            let html = '';
            let note = this.note || 0;
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


    }
});




