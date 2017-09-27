import html from './tmpl/my-body.component.html'


export const myBody = {
    controller: function MyBodyCtrl() {
        // console.log('MyBodyCtrl', this);
        this.name = 'Maïté';
    },
    template: html
};


