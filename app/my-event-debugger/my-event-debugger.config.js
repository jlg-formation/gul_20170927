export const config = function ($provide) {
    $provide.decorator('$rootScope', function ($delegate) {
        var emit = $delegate.$emit;

        $delegate.$emit = function () {
            var args = Array.prototype.slice.apply(arguments);
            args.unshift('event sent: ');
            console.log.apply(console, args);
            emit.apply(this, arguments);
        };

        return $delegate;
    });
};
