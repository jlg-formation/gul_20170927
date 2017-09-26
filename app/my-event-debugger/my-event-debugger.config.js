export const config = function ($provide) {
    'ngInject';
    $provide.decorator('$rootScope', function ($delegate) {
        const emit = $delegate.$emit;

        $delegate.$emit = function () {
            const args = Array.prototype.slice.apply(arguments);
            args.unshift('event sent: ');
            console.log.apply(console, args);
            emit.apply(this, arguments);
        };

        return $delegate;
    });
};
