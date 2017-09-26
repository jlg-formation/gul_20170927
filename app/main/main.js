import 'angular';
import '../my-layout/my-layout.js';

import { myApp } from './my-app.component.js';

angular.module('main', ['my-layout'])
    .component('myApp', myApp);
