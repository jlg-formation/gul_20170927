import '../my-widgets/my-widgets.js';

import 'angular-ui-router';


import { config } from './my-layout.config.js';
import { myHeader } from './my-header.component.js';
import { myBody } from './my-body.component.js';
import { myFooter } from './my-footer.component.js';

angular.module('my-layout', ['my-widgets', 'ui.router'])
    .config(config)
    .component('myHeader', myHeader)
    .component('myBody', myBody)
    .component('myFooter', myFooter);




