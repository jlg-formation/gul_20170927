export const myDate = {
    controller: function MyDateCtrl($http) {
        var ctrl = this;
        console.log('MyAppCtrl', this);
        $http.get('../ws/date').then(function (response) {
            console.log('response', response);
            ctrl.date = new Date(response.data.date);
        }).catch(function (error) {
            console.error('error', error);
        });

    },
    template: `<p>{{$ctrl.date | date : 'medium'}}</p>`
};


