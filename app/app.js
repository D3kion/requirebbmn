requirejs.config({
    baseUrl: 'lib',
    paths: {
        src: '../src'
    }
});

requirejs(['src/main']);
