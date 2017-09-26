export const config = function($httpProvider, $provide) {
    'ngInject';
    $provide.factory('myJsonCheckerInterceptor', function($q) {
        return {
            response: function(response) {
                console.log('myJsonCheckerInterceptor ', response);
                if (typeof response.data !== 'object' && response.config.url.match(/\/ws\//)) {
                    console.error('error', response);
                    return $q.reject(response);
                }
                return response;
            },
        };
    });

    $httpProvider.interceptors.push('myJsonCheckerInterceptor');

    console.log('interceptors', $httpProvider.interceptors);
};