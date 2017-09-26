import '../my-widgets/my-widgets.js';


import { myHeader } from './my-header.component.js';
import { myBody } from './my-body.component.js';
import { myFooter } from './my-footer.component.js';

angular.module('my-layout', ['my-widgets'])
    .component('myHeader', myHeader)
    .component('myBody', myBody)
    .component('myFooter', myFooter);




