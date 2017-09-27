export const myDate = {
    controller: function MyDateCtrl($http, $rootScope) {
        'ngInject';
        var ctrl = this;
        $http.get('../ws/date').then(function (response) {
            console.log('response', response);
            ctrl.date = new Date(response.data.date);
            $rootScope.$emit('yeah, i have the date...');
        }).catch(function (error) {
            console.error('error', error);
        });

    },
    template: `<p>{{$ctrl.date | date : 'medium'}}</p>`
};


