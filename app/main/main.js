import '../style.scss';
import 'angular';
import '../my-layout/my-layout.js';
import '../my-json-checker/my-json-checker.js';
import '../my-event-debugger/my-event-debugger.js';
import '../my-digest-debugger/my-digest-debugger.js';
import '../my-stars/my-stars.js';

import { myApp } from './my-app.component.js';

angular.module('main', [
    'my-layout',
    'my-event-debugger',
    // 'my-digest-debugger',
    'my-stars'])
    .component('myApp', myApp);
