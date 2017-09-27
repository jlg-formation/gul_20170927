const app = angular.module('my-digest-debugger', []);

var timer = 0;

app.config(function ($provide) {
    $provide.decorator('$browser', function ($delegate) {
        var $$checkUrlChange = $delegate.$$checkUrlChange;
        console.log('this', this);
        console.log('$delegate', $delegate);


        $delegate.$$checkUrlChange = function () {
            console.log.call(console, 'digest start');
            timer = performance.now();
            $$checkUrlChange.apply($delegate, arguments);
        };

        return $delegate;
    });
});


// Just to look how much time take a digest cycle.
app.run(function($rootScope, $timeout) {
    'ngInject';

    var postDigest = function(callback) {
        var unregister = $rootScope.$watch(function() {
            unregister();
            $timeout(function() {
                callback();
                postDigest(callback);
            }, 0, false);
        });
    };

    postDigest(function() {
        var diff = performance.now() - timer;
        console.log('end of digest', diff);
    });

});
