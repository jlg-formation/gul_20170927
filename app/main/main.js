import '../style.scss';
import 'angular';
import '../my-layout/my-layout.js';
import '../my-json-checker/my-json-checker.js';

import { myApp } from './my-app.component.js';

angular.module('main', ['my-layout', 'my-json-checker'])
    .component('myApp', myApp);
