module.exports = function (config) {
    config.set({
        basePath: '../../../src/',
        exclude: ['**/bootstrap.js', '**/bootstrap.min.js'],
        frameworks: ['jasmine'],
        files: [
            '**/lib/angular.js',
            '**/lib/*.js',
            '**/app/OpenTrAppModule.js',
            '**/app/*.js'
        ],

        browsers: [
            'PhantomJS'
        ],
        autoWatch: false
    });
};
